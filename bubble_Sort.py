def bubble_sort_count(arr, ascending=True):
    n = len(arr)
    swaps = 0
    for i in range(n):
        for j in range(0, n-i-1):
            if (ascending and arr[j] > arr[j+1]) or (not ascending and arr[j] < arr[j+1]):
                arr[j], arr[j+1] = arr[j+1], arr[j]
                swaps += 1
    return swaps

def minimum_swaps_to_beautiful(arr):
    # Create a copy of the array to preserve the original input
    arr_asc = arr[:]
    arr_desc = arr[:]
    
    # Count swaps for ascending order
    asc_swaps = bubble_sort_count(arr_asc, ascending=True)
    
    # Count swaps for descending order
    desc_swaps = bubble_sort_count(arr_desc, ascending=False)
    
    # Return the minimum of the two
    return min(asc_swaps, desc_swaps)

# Input reading and function call
N = int(input())  # Number of elements
arr = list(map(int, input().split()))  # Array elements

# Get the result and print it
result = minimum_swaps_to_beautiful(arr)
print(result)
