import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { CommitteeMember, CommitteeType } from '@/lib/types/committee';

/**
 * Get the current academic year
 * Academic year starts in September, so:
 * - Jan-Aug: previous calendar year
 * - Sep-Dec: current calendar year
 */
function getAcademicYear(): number {
    const now = new Date();
    const month = now.getMonth(); // 0-11
    const year = now.getFullYear();

    // If we're in Jan-Aug (months 0-7), use previous year
    // If we're in Sep-Dec (months 8-11), use current year
    return month < 8 ? year - 1 : year;
}

/**
 * Parse a single markdown file into a CommitteeMember object
 */
function parseCommitteeMemberFile(filePath: string, directory: 'executive' | 'developers'): CommitteeMember {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);

    // Automatically derive memberId from filename
    const fileName = path.basename(filePath, '.md');

    return {
        name: data.name,
        role: data.role,
        memberId: fileName, // Use filename instead of frontmatter
        description: content.trim(),
        committeeType: directory === 'executive' ? CommitteeType.EXECUTIVE : CommitteeType.DEVELOPERS,
        photo: data.photo,
        startDate: data.startDate,
        order: data.order || 999, // Default to 999 if not specified
    };
}

/**
 * Fetch all committee members from markdown files
 * Filters by current academic year (startDate >= Sept 1st of current academic year)
 */
export async function fetchCommittee(): Promise<CommitteeMember[]> {
    const committeeDir = path.join(process.cwd(), 'data/committee');
    const members: CommitteeMember[] = [];

    // Parse executive committee members
    const executiveDir = path.join(committeeDir, 'executive');
    if (fs.existsSync(executiveDir)) {
        const executiveFiles = fs.readdirSync(executiveDir);

        for (const file of executiveFiles) {
            if (!file.endsWith('.md')) continue;

            const filePath = path.join(executiveDir, file);
            const member = parseCommitteeMemberFile(filePath, 'executive');
            members.push(member);
        }
    }

    // Parse developer committee members
    const developersDir = path.join(committeeDir, 'developers');
    if (fs.existsSync(developersDir)) {
        const developerFiles = fs.readdirSync(developersDir);

        for (const file of developerFiles) {
            if (!file.endsWith('.md')) continue;

            const filePath = path.join(developersDir, file);
            const member = parseCommitteeMemberFile(filePath, 'developers');
            members.push(member);
        }
    }

    // Filter by academic year
    const academicYear = getAcademicYear();
    const filterDate = `${academicYear}-09-01`;
    const filteredMembers = members.filter(member => member.startDate >= filterDate);

    // Sort by order field (lower order = displayed first)
    filteredMembers.sort((a, b) => a.order - b.order);

    return filteredMembers;
}

/**
 * Fetch a single committee member by their memberId
 */
export async function fetchCommitteeById(memberId: string): Promise<CommitteeMember | null> {
    const allMembers = await fetchCommittee();
    return allMembers.find(member => member.memberId === memberId) || null;
}
