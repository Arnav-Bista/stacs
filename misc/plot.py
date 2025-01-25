import matplotlib.pyplot as plt
import ast


def read_points(filename):
    with open(filename, 'r') as file:
        points = ast.literal_eval(file.read().strip())

    x_coords = [point[0] for point in points]
    y_coords = [point[1] for point in points]

    return x_coords, y_coords


def plot_points(filename):
    x_coords, y_coords = read_points(filename)

    plt.figure(figsize=(10, 6))
    # Plot the connecting line
    plt.plot(x_coords, y_coords, color='blue', alpha=0.6, label='Line')
    # Add scatter points
    # plt.scatter(x_coords, y_coords, color='red',
    #             s=50, alpha=0.7, label='Points')

    # Add numbers to points
    # for i, (x, y) in enumerate(zip(x_coords, y_coords)):
    #     plt.annotate(str(i), (x, y), xytext=(5, 5),
    #                  textcoords='offset points', fontsize=8)

    plt.grid(True)
    plt.xlabel('X')
    plt.ylabel('Y')
    plt.title('Points Plot')

    plt.show()


if __name__ == "__main__":
    plot_points("points")
