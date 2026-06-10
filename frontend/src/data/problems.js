export const PROBLEMS = {
  "two-sum": {
    id: "two-sum",
    title: "Two Sum",
    difficulty: "Easy",
    category: "Array • Hash Table",
    description: {
      text: "Given an array of integers nums and an integer target, return indices of the two numbers in the array such that they add up to target.",
      notes: [
        "You may assume that each input would have exactly one solution, and you may not use the same element twice.",
        "You can return the answer in any order.",
      ],
    },
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
      },
      {
        input: "nums = [3,3], target = 6",
        output: "[0,1]",
      },
    ],
    constraints: [
      "2 ≤ nums.length ≤ 10⁴",
      "-10⁹ ≤ nums[i] ≤ 10⁹",
      "-10⁹ ≤ target ≤ 10⁹",
      "Only one valid answer exists",
    ],
    starterCode: {
      javascript: `function twoSum(nums, target) {
  // Write your solution here
  
}

// Test cases
console.log(twoSum([2, 7, 11, 15], 9)); // Expected: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Expected: [1, 2]
console.log(twoSum([3, 3], 6)); // Expected: [0, 1]`,
      python: `def twoSum(nums, target):
    # Write your solution here
    pass

# Test cases
print(twoSum([2, 7, 11, 15], 9))  # Expected: [0, 1]
print(twoSum([3, 2, 4], 6))  # Expected: [1, 2]
print(twoSum([3, 3], 6))  # Expected: [0, 1]`,
      java: `import java.util.*;

class Solution {
    public static int[] twoSum(int[] nums, int target) {
        // Write your solution here
        
        return new int[0];
    }
    
    public static void main(String[] args) {
        System.out.println(Arrays.toString(twoSum(new int[]{2, 7, 11, 15}, 9))); // Expected: [0, 1]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 2, 4}, 6))); // Expected: [1, 2]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 3}, 6))); // Expected: [0, 1]
    }
}`,
    },
    expectedOutput: {
      javascript: "[0,1]\n[1,2]\n[0,1]",
      python: "[0, 1]\n[1, 2]\n[0, 1]",
      java: "[0, 1]\n[1, 2]\n[0, 1]",
    },
  },

  "reverse-string": {
    id: "reverse-string",
    title: "Reverse String",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "Write a function that reverses a string. The input string is given as an array of characters s.",
      notes: ["You must do this by modifying the input array in-place with O(1) extra memory."],
    },
    examples: [
      {
        input: 's = ["h","e","l","l","o"]',
        output: '["o","l","l","e","h"]',
      },
      {
        input: 's = ["H","a","n","n","a","h"]',
        output: '["h","a","n","n","a","H"]',
      },
    ],
    constraints: ["1 ≤ s.length ≤ 10⁵", "s[i] is a printable ascii character"],
    starterCode: {
      javascript: `function reverseString(s) {
  // Write your solution here
  
}

// Test cases
let test1 = ["h","e","l","l","o"];
reverseString(test1);
console.log(test1); // Expected: ["o","l","l","e","h"]

let test2 = ["H","a","n","n","a","h"];
reverseString(test2);
console.log(test2); // Expected: ["h","a","n","n","a","H"]`,
      python: `def reverseString(s):
    # Write your solution here
    pass

# Test cases
test1 = ["h","e","l","l","o"]
reverseString(test1)
print(test1)  # Expected: ["o","l","l","e","h"]

test2 = ["H","a","n","n","a","h"]
reverseString(test2)
print(test2)  # Expected: ["h","a","n","n","a","H"]`,
      java: `import java.util.*;

class Solution {
    public static void reverseString(char[] s) {
        // Write your solution here
        
    }
    
    public static void main(String[] args) {
        char[] test1 = {'h','e','l','l','o'};
        reverseString(test1);
        System.out.println(Arrays.toString(test1)); // Expected: [o, l, l, e, h]
        
        char[] test2 = {'H','a','n','n','a','h'};
        reverseString(test2);
        System.out.println(Arrays.toString(test2)); // Expected: [h, a, n, n, a, H]
    }
}`,
    },
    expectedOutput: {
      javascript: '["o","l","l","e","h"]\n["h","a","n","n","a","H"]',
      python: "['o', 'l', 'l', 'e', 'h']\n['h', 'a', 'n', 'n', 'a', 'H']",
      java: "[o, l, l, e, h]\n[h, a, n, n, a, H]",
    },
  },

  "valid-palindrome": {
    id: "valid-palindrome",
    title: "Valid Palindrome",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.",
      notes: ["Given a string s, return true if it is a palindrome, or false otherwise."],
    },
    examples: [
      {
        input: 's = "A man, a plan, a canal: Panama"',
        output: "true",
        explanation: '"amanaplanacanalpanama" is a palindrome.',
      },
      {
        input: 's = "race a car"',
        output: "false",
        explanation: '"raceacar" is not a palindrome.',
      },
      {
        input: 's = " "',
        output: "true",
        explanation:
          's is an empty string "" after removing non-alphanumeric characters. Since an empty string reads the same forward and backward, it is a palindrome.',
      },
    ],
    constraints: ["1 ≤ s.length ≤ 2 * 10⁵", "s consists only of printable ASCII characters"],
    starterCode: {
      javascript: `function isPalindrome(s) {
  // Write your solution here
  
}

// Test cases
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
console.log(isPalindrome("race a car")); // Expected: false
console.log(isPalindrome(" ")); // Expected: true`,
      python: `def isPalindrome(s):
    # Write your solution here
    pass

# Test cases
print(isPalindrome("A man, a plan, a canal: Panama"))  # Expected: True
print(isPalindrome("race a car"))  # Expected: False
print(isPalindrome(" "))  # Expected: True`,
      java: `class Solution {
    public static boolean isPalindrome(String s) {
        // Write your solution here
        
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
        System.out.println(isPalindrome("race a car")); // Expected: false
        System.out.println(isPalindrome(" ")); // Expected: true
    }
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse\ntrue",
      python: "True\nFalse\nTrue",
      java: "true\nfalse\ntrue",
    },
  },

  "maximum-subarray": {
    id: "maximum-subarray",
    title: "Maximum Subarray",
    difficulty: "Medium",
    category: "Array • Dynamic Programming",
    description: {
      text: "Given an integer array nums, find the subarray with the largest sum, and return its sum.",
      notes: [],
    },
    examples: [
      {
        input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
        output: "6",
        explanation: "The subarray [4,-1,2,1] has the largest sum 6.",
      },
      {
        input: "nums = [1]",
        output: "1",
        explanation: "The subarray [1] has the largest sum 1.",
      },
      {
        input: "nums = [5,4,-1,7,8]",
        output: "23",
        explanation: "The subarray [5,4,-1,7,8] has the largest sum 23.",
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxSubArray(nums) {
  // Write your solution here
  
}

// Test cases
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // Expected: 6
console.log(maxSubArray([1])); // Expected: 1
console.log(maxSubArray([5,4,-1,7,8])); // Expected: 23`,
      python: `def maxSubArray(nums):
    # Write your solution here
    pass

# Test cases
print(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))  # Expected: 6
print(maxSubArray([1]))  # Expected: 1
print(maxSubArray([5,4,-1,7,8]))  # Expected: 23`,
      java: `class Solution {
    public static int maxSubArray(int[] nums) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxSubArray(new int[]{-2,1,-3,4,-1,2,1,-5,4})); // Expected: 6
        System.out.println(maxSubArray(new int[]{1})); // Expected: 1
        System.out.println(maxSubArray(new int[]{5,4,-1,7,8})); // Expected: 23
    }
}`,
    },
    expectedOutput: {
      javascript: "6\n1\n23",
      python: "6\n1\n23",
      java: "6\n1\n23",
    },
  },

  "container-with-most-water": {
    id: "container-with-most-water",
    title: "Container With Most Water",
    difficulty: "Medium",
    category: "Array • Two Pointers",
    description: {
      text: "You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).",
      notes: [
        "Find two lines that together with the x-axis form a container, such that the container contains the most water.",
        "Return the maximum amount of water a container can store.",
        "Notice that you may not slant the container.",
      ],
    },
    examples: [
      {
        input: "height = [1,8,6,2,5,4,8,3,7]",
        output: "49",
        explanation:
          "The vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water the container can contain is 49.",
      },
      {
        input: "height = [1,1]",
        output: "1",
      },
    ],
    constraints: ["n == height.length", "2 ≤ n ≤ 10⁵", "0 ≤ height[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxArea(height) {
  // Write your solution here
  
}

// Test cases
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // Expected: 49
console.log(maxArea([1,1])); // Expected: 1`,
      python: `def maxArea(height):
    # Write your solution here
    pass

# Test cases
print(maxArea([1,8,6,2,5,4,8,3,7]))  # Expected: 49
print(maxArea([1,1]))  # Expected: 1`,
      java: `class Solution {
    public static int maxArea(int[] height) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxArea(new int[]{1,8,6,2,5,4,8,3,7})); // Expected: 49
        System.out.println(maxArea(new int[]{1,1})); // Expected: 1
    }
}`,
    },
    expectedOutput: {
      javascript: "49\n1",
      python: "49\n1",
      java: "49\n1",
    },
  },
  // BATCH 1 - 15 new problems to add to PROBLEMS object (paste before the closing }; of PROBLEMS)

  "best-time-to-buy-sell-stock": {
    id: "best-time-to-buy-sell-stock",
    title: "Best Time to Buy and Sell Stock",
    difficulty: "Easy",
    category: "Array • Sliding Window",
    description: {
      text: "You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.",
      notes: ["Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0."],
    },
    examples: [
      {
        input: "prices = [7,1,5,3,6,4]",
        output: "5",
        explanation: "Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.",
      },
      {
        input: "prices = [7,6,4,3,1]",
        output: "0",
        explanation: "In this case, no transactions are done and the max profit = 0.",
      },
    ],
    constraints: ["1 ≤ prices.length ≤ 10⁵", "0 ≤ prices[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxProfit(prices) {
  // Write your solution here
  
}

// Test cases
console.log(maxProfit([7,1,5,3,6,4])); // Expected: 5
console.log(maxProfit([7,6,4,3,1])); // Expected: 0
console.log(maxProfit([1,2])); // Expected: 1`,
      python: `def maxProfit(prices):
    # Write your solution here
    pass

# Test cases
print(maxProfit([7,1,5,3,6,4]))  # Expected: 5
print(maxProfit([7,6,4,3,1]))  # Expected: 0
print(maxProfit([1,2]))  # Expected: 1`,
      java: `class Solution {
    public static int maxProfit(int[] prices) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxProfit(new int[]{7,1,5,3,6,4})); // Expected: 5
        System.out.println(maxProfit(new int[]{7,6,4,3,1})); // Expected: 0
        System.out.println(maxProfit(new int[]{1,2})); // Expected: 1
    }
}`,
    },
    expectedOutput: {
      javascript: "5\n0\n1",
      python: "5\n0\n1",
      java: "5\n0\n1",
    },
  },

  "contains-duplicate": {
    id: "contains-duplicate",
    title: "Contains Duplicate",
    difficulty: "Easy",
    category: "Array • Hash Table",
    description: {
      text: "Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.",
      notes: [],
    },
    examples: [
      {
        input: "nums = [1,2,3,1]",
        output: "true",
      },
      {
        input: "nums = [1,2,3,4]",
        output: "false",
      },
      {
        input: "nums = [1,1,1,3,3,4,3,2,4,2]",
        output: "true",
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁹ ≤ nums[i] ≤ 10⁹"],
    starterCode: {
      javascript: `function containsDuplicate(nums) {
  // Write your solution here
  
}

// Test cases
console.log(containsDuplicate([1,2,3,1])); // Expected: true
console.log(containsDuplicate([1,2,3,4])); // Expected: false
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2])); // Expected: true`,
      python: `def containsDuplicate(nums):
    # Write your solution here
    pass

# Test cases
print(containsDuplicate([1,2,3,1]))  # Expected: True
print(containsDuplicate([1,2,3,4]))  # Expected: False
print(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))  # Expected: True`,
      java: `class Solution {
    public static boolean containsDuplicate(int[] nums) {
        // Write your solution here
        
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(containsDuplicate(new int[]{1,2,3,1})); // Expected: true
        System.out.println(containsDuplicate(new int[]{1,2,3,4})); // Expected: false
        System.out.println(containsDuplicate(new int[]{1,1,1,3,3,4,3,2,4,2})); // Expected: true
    }
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse\ntrue",
      python: "True\nFalse\nTrue",
      java: "true\nfalse\ntrue",
    },
  },

  "product-of-array-except-self": {
    id: "product-of-array-except-self",
    title: "Product of Array Except Self",
    difficulty: "Medium",
    category: "Array • Prefix Sum",
    description: {
      text: "Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].",
      notes: [
        "The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.",
        "You must write an algorithm that runs in O(n) time and without using the division operation.",
      ],
    },
    examples: [
      {
        input: "nums = [1,2,3,4]",
        output: "[24,12,8,6]",
      },
      {
        input: "nums = [-1,1,0,-3,3]",
        output: "[0,0,9,0,0]",
      },
    ],
    constraints: ["2 ≤ nums.length ≤ 10⁵", "-30 ≤ nums[i] ≤ 30"],
    starterCode: {
      javascript: `function productExceptSelf(nums) {
  // Write your solution here
  
}

// Test cases
console.log(productExceptSelf([1,2,3,4])); // Expected: [24,12,8,6]
console.log(productExceptSelf([-1,1,0,-3,3])); // Expected: [0,0,9,0,0]`,
      python: `def productExceptSelf(nums):
    # Write your solution here
    pass

# Test cases
print(productExceptSelf([1,2,3,4]))  # Expected: [24, 12, 8, 6]
print(productExceptSelf([-1,1,0,-3,3]))  # Expected: [0, 0, 9, 0, 0]`,
      java: `import java.util.*;

class Solution {
    public static int[] productExceptSelf(int[] nums) {
        // Write your solution here
        
        return new int[0];
    }
    
    public static void main(String[] args) {
        System.out.println(Arrays.toString(productExceptSelf(new int[]{1,2,3,4}))); // Expected: [24, 12, 8, 6]
        System.out.println(Arrays.toString(productExceptSelf(new int[]{-1,1,0,-3,3}))); // Expected: [0, 0, 9, 0, 0]
    }
}`,
    },
    expectedOutput: {
      javascript: "[24,12,8,6]\n[0,0,9,0,0]",
      python: "[24, 12, 8, 6]\n[0, 0, 9, 0, 0]",
      java: "[24, 12, 8, 6]\n[0, 0, 9, 0, 0]",
    },
  },

  "find-minimum-in-rotated-sorted-array": {
    id: "find-minimum-in-rotated-sorted-array",
    title: "Find Minimum in Rotated Sorted Array",
    difficulty: "Medium",
    category: "Array • Binary Search",
    description: {
      text: "Suppose an array of length n sorted in ascending order is rotated between 1 and n times. Given the sorted rotated array nums of unique elements, return the minimum element of this array.",
      notes: ["You must write an algorithm that runs in O(log n) time."],
    },
    examples: [
      {
        input: "nums = [3,4,5,1,2]",
        output: "1",
        explanation: "The original array was [1,2,3,4,5] rotated 3 times.",
      },
      {
        input: "nums = [4,5,6,7,0,1,2]",
        output: "0",
        explanation: "The original array was [0,1,2,4,5,6,7] rotated 4 times.",
      },
      {
        input: "nums = [11,13,15,17]",
        output: "11",
        explanation: "The original array was [11,13,15,17] rotated 4 times.",
      },
    ],
    constraints: ["n == nums.length", "1 ≤ n ≤ 5000", "-5000 ≤ nums[i] ≤ 5000", "All the integers of nums are unique"],
    starterCode: {
      javascript: `function findMin(nums) {
  // Write your solution here
  
}

// Test cases
console.log(findMin([3,4,5,1,2])); // Expected: 1
console.log(findMin([4,5,6,7,0,1,2])); // Expected: 0
console.log(findMin([11,13,15,17])); // Expected: 11`,
      python: `def findMin(nums):
    # Write your solution here
    pass

# Test cases
print(findMin([3,4,5,1,2]))  # Expected: 1
print(findMin([4,5,6,7,0,1,2]))  # Expected: 0
print(findMin([11,13,15,17]))  # Expected: 11`,
      java: `class Solution {
    public static int findMin(int[] nums) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(findMin(new int[]{3,4,5,1,2})); // Expected: 1
        System.out.println(findMin(new int[]{4,5,6,7,0,1,2})); // Expected: 0
        System.out.println(findMin(new int[]{11,13,15,17})); // Expected: 11
    }
}`,
    },
    expectedOutput: {
      javascript: "1\n0\n11",
      python: "1\n0\n11",
      java: "1\n0\n11",
    },
  },

  "search-in-rotated-sorted-array": {
    id: "search-in-rotated-sorted-array",
    title: "Search in Rotated Sorted Array",
    difficulty: "Medium",
    category: "Array • Binary Search",
    description: {
      text: "Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.",
      notes: ["You must write an algorithm with O(log n) runtime complexity."],
    },
    examples: [
      {
        input: "nums = [4,5,6,7,0,1,2], target = 0",
        output: "4",
      },
      {
        input: "nums = [4,5,6,7,0,1,2], target = 3",
        output: "-1",
      },
      {
        input: "nums = [1], target = 0",
        output: "-1",
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 5000", "-10⁴ ≤ nums[i] ≤ 10⁴", "All values of nums are unique"],
    starterCode: {
      javascript: `function search(nums, target) {
  // Write your solution here
  
}

// Test cases
console.log(search([4,5,6,7,0,1,2], 0)); // Expected: 4
console.log(search([4,5,6,7,0,1,2], 3)); // Expected: -1
console.log(search([1], 0)); // Expected: -1`,
      python: `def search(nums, target):
    # Write your solution here
    pass

# Test cases
print(search([4,5,6,7,0,1,2], 0))  # Expected: 4
print(search([4,5,6,7,0,1,2], 3))  # Expected: -1
print(search([1], 0))  # Expected: -1`,
      java: `class Solution {
    public static int search(int[] nums, int target) {
        // Write your solution here
        
        return -1;
    }
    
    public static void main(String[] args) {
        System.out.println(search(new int[]{4,5,6,7,0,1,2}, 0)); // Expected: 4
        System.out.println(search(new int[]{4,5,6,7,0,1,2}, 3)); // Expected: -1
        System.out.println(search(new int[]{1}, 0)); // Expected: -1
    }
}`,
    },
    expectedOutput: {
      javascript: "4\n-1\n-1",
      python: "4\n-1\n-1",
      java: "4\n-1\n-1",
    },
  },

  "three-sum": {
    id: "three-sum",
    title: "3Sum",
    difficulty: "Medium",
    category: "Array • Two Pointers • Sorting",
    description: {
      text: "Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.",
      notes: ["The solution set must not contain duplicate triplets."],
    },
    examples: [
      {
        input: "nums = [-1,0,1,2,-1,-4]",
        output: "[[-1,-1,2],[-1,0,1]]",
      },
      {
        input: "nums = [0,1,1]",
        output: "[]",
      },
      {
        input: "nums = [0,0,0]",
        output: "[[0,0,0]]",
      },
    ],
    constraints: ["3 ≤ nums.length ≤ 3000", "-10⁵ ≤ nums[i] ≤ 10⁵"],
    starterCode: {
      javascript: `function threeSum(nums) {
  // Write your solution here
  
}

// Test cases
console.log(JSON.stringify(threeSum([-1,0,1,2,-1,-4]))); // Expected: [[-1,-1,2],[-1,0,1]]
console.log(JSON.stringify(threeSum([0,1,1]))); // Expected: []
console.log(JSON.stringify(threeSum([0,0,0]))); // Expected: [[0,0,0]]`,
      python: `def threeSum(nums):
    # Write your solution here
    pass

# Test cases
print(threeSum([-1,0,1,2,-1,-4]))  # Expected: [[-1,-1,2],[-1,0,1]]
print(threeSum([0,1,1]))  # Expected: []
print(threeSum([0,0,0]))  # Expected: [[0,0,0]]`,
      java: `import java.util.*;

class Solution {
    public static List<List<Integer>> threeSum(int[] nums) {
        // Write your solution here
        
        return new ArrayList<>();
    }
    
    public static void main(String[] args) {
        System.out.println(threeSum(new int[]{-1,0,1,2,-1,-4})); // Expected: [[-1,-1,2],[-1,0,1]]
        System.out.println(threeSum(new int[]{0,1,1})); // Expected: []
        System.out.println(threeSum(new int[]{0,0,0})); // Expected: [[0,0,0]]
    }
}`,
    },
    expectedOutput: {
      javascript: '[[-1,-1,2],[-1,0,1]]\n[]\n[[0,0,0]]',
      python: "[[-1, -1, 2], [-1, 0, 1]]\n[]\n[[0, 0, 0]]",
      java: "[[-1, -1, 2], [-1, 0, 1]]\n[]\n[[0, 0, 0]]",
    },
  },

  "climbing-stairs": {
    id: "climbing-stairs",
    title: "Climbing Stairs",
    difficulty: "Easy",
    category: "Dynamic Programming",
    description: {
      text: "You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
      notes: [],
    },
    examples: [
      {
        input: "n = 2",
        output: "2",
        explanation: "There are two ways to climb to the top: 1+1 and 2.",
      },
      {
        input: "n = 3",
        output: "3",
        explanation: "There are three ways: 1+1+1, 1+2, and 2+1.",
      },
    ],
    constraints: ["1 ≤ n ≤ 45"],
    starterCode: {
      javascript: `function climbStairs(n) {
  // Write your solution here
  
}

// Test cases
console.log(climbStairs(2)); // Expected: 2
console.log(climbStairs(3)); // Expected: 3
console.log(climbStairs(5)); // Expected: 8`,
      python: `def climbStairs(n):
    # Write your solution here
    pass

# Test cases
print(climbStairs(2))  # Expected: 2
print(climbStairs(3))  # Expected: 3
print(climbStairs(5))  # Expected: 8`,
      java: `class Solution {
    public static int climbStairs(int n) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(climbStairs(2)); // Expected: 2
        System.out.println(climbStairs(3)); // Expected: 3
        System.out.println(climbStairs(5)); // Expected: 8
    }
}`,
    },
    expectedOutput: {
      javascript: "2\n3\n8",
      python: "2\n3\n8",
      java: "2\n3\n8",
    },
  },

  "coin-change": {
    id: "coin-change",
    title: "Coin Change",
    difficulty: "Medium",
    category: "Dynamic Programming",
    description: {
      text: "You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money. Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.",
      notes: ["You may assume that you have an infinite number of each kind of coin."],
    },
    examples: [
      {
        input: "coins = [1,2,5], amount = 11",
        output: "3",
        explanation: "11 = 5 + 5 + 1",
      },
      {
        input: "coins = [2], amount = 3",
        output: "-1",
      },
      {
        input: "coins = [1], amount = 0",
        output: "0",
      },
    ],
    constraints: ["1 ≤ coins.length ≤ 12", "1 ≤ coins[i] ≤ 2³¹ - 1", "0 ≤ amount ≤ 10⁴"],
    starterCode: {
      javascript: `function coinChange(coins, amount) {
  // Write your solution here
  
}

// Test cases
console.log(coinChange([1,2,5], 11)); // Expected: 3
console.log(coinChange([2], 3)); // Expected: -1
console.log(coinChange([1], 0)); // Expected: 0`,
      python: `def coinChange(coins, amount):
    # Write your solution here
    pass

# Test cases
print(coinChange([1,2,5], 11))  # Expected: 3
print(coinChange([2], 3))  # Expected: -1
print(coinChange([1], 0))  # Expected: 0`,
      java: `class Solution {
    public static int coinChange(int[] coins, int amount) {
        // Write your solution here
        
        return -1;
    }
    
    public static void main(String[] args) {
        System.out.println(coinChange(new int[]{1,2,5}, 11)); // Expected: 3
        System.out.println(coinChange(new int[]{2}, 3)); // Expected: -1
        System.out.println(coinChange(new int[]{1}, 0)); // Expected: 0
    }
}`,
    },
    expectedOutput: {
      javascript: "3\n-1\n0",
      python: "3\n-1\n0",
      java: "3\n-1\n0",
    },
  },

  "longest-increasing-subsequence": {
    id: "longest-increasing-subsequence",
    title: "Longest Increasing Subsequence",
    difficulty: "Medium",
    category: "Array • Dynamic Programming • Binary Search",
    description: {
      text: "Given an integer array nums, return the length of the longest strictly increasing subsequence.",
      notes: [],
    },
    examples: [
      {
        input: "nums = [10,9,2,5,3,7,101,18]",
        output: "4",
        explanation: "The longest increasing subsequence is [2,3,7,101], therefore the length is 4.",
      },
      {
        input: "nums = [0,1,0,3,2,3]",
        output: "4",
      },
      {
        input: "nums = [7,7,7,7,7,7,7]",
        output: "1",
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 2500", "-10⁴ ≤ nums[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function lengthOfLIS(nums) {
  // Write your solution here
  
}

// Test cases
console.log(lengthOfLIS([10,9,2,5,3,7,101,18])); // Expected: 4
console.log(lengthOfLIS([0,1,0,3,2,3])); // Expected: 4
console.log(lengthOfLIS([7,7,7,7,7,7,7])); // Expected: 1`,
      python: `def lengthOfLIS(nums):
    # Write your solution here
    pass

# Test cases
print(lengthOfLIS([10,9,2,5,3,7,101,18]))  # Expected: 4
print(lengthOfLIS([0,1,0,3,2,3]))  # Expected: 4
print(lengthOfLIS([7,7,7,7,7,7,7]))  # Expected: 1`,
      java: `class Solution {
    public static int lengthOfLIS(int[] nums) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(lengthOfLIS(new int[]{10,9,2,5,3,7,101,18})); // Expected: 4
        System.out.println(lengthOfLIS(new int[]{0,1,0,3,2,3})); // Expected: 4
        System.out.println(lengthOfLIS(new int[]{7,7,7,7,7,7,7})); // Expected: 1
    }
}`,
    },
    expectedOutput: {
      javascript: "4\n4\n1",
      python: "4\n4\n1",
      java: "4\n4\n1",
    },
  },

  "valid-parentheses": {
    id: "valid-parentheses",
    title: "Valid Parentheses",
    difficulty: "Easy",
    category: "String • Stack",
    description: {
      text: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
      notes: [
        "An input string is valid if: Open brackets must be closed by the same type of brackets, and open brackets must be closed in the correct order.",
        "Every close bracket has a corresponding open bracket of the same type.",
      ],
    },
    examples: [
      {
        input: 's = "()"',
        output: "true",
      },
      {
        input: 's = "()[]{}"',
        output: "true",
      },
      {
        input: 's = "(]"',
        output: "false",
      },
    ],
    constraints: ["1 ≤ s.length ≤ 10⁴", "s consists of parentheses only '()[]{}'"],
    starterCode: {
      javascript: `function isValid(s) {
  // Write your solution here
  
}

// Test cases
console.log(isValid("()")); // Expected: true
console.log(isValid("()[]{}")); // Expected: true
console.log(isValid("(]")); // Expected: false`,
      python: `def isValid(s):
    # Write your solution here
    pass

# Test cases
print(isValid("()"))  # Expected: True
print(isValid("()[]{}"))  # Expected: True
print(isValid("(]"))  # Expected: False`,
      java: `class Solution {
    public static boolean isValid(String s) {
        // Write your solution here
        
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(isValid("()")); // Expected: true
        System.out.println(isValid("()[]{}")); // Expected: true
        System.out.println(isValid("(]")); // Expected: false
    }
}`,
    },
    expectedOutput: {
      javascript: "true\ntrue\nfalse",
      python: "True\nTrue\nFalse",
      java: "true\ntrue\nfalse",
    },
  },

  "min-stack": {
    id: "min-stack",
    title: "Min Stack",
    difficulty: "Medium",
    category: "Stack • Design",
    description: {
      text: "Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.",
      notes: [
        "push(val) — pushes the element val onto the stack.",
        "pop() — removes the element on the top of the stack.",
        "top() — gets the top element of the stack.",
        "getMin() — retrieves the minimum element in the stack.",
        "You must implement a solution with O(1) time complexity for each function.",
      ],
    },
    examples: [
      {
        input: '["MinStack","push","push","push","getMin","pop","top","getMin"]\n[[],[-2],[0],[-3],[],[],[],[]]',
        output: "[null,null,null,null,-3,null,0,-2]",
      },
    ],
    constraints: ["-2³¹ ≤ val ≤ 2³¹ - 1", "Methods pop, top and getMin operations will always be called on non-empty stacks"],
    starterCode: {
      javascript: `class MinStack {
  constructor() {
    // Write your solution here
  }
  
  push(val) {
    // Write your solution here
  }
  
  pop() {
    // Write your solution here
  }
  
  top() {
    // Write your solution here
  }
  
  getMin() {
    // Write your solution here
  }
}

// Test cases
const stack = new MinStack();
stack.push(-2);
stack.push(0);
stack.push(-3);
console.log(stack.getMin()); // Expected: -3
stack.pop();
console.log(stack.top()); // Expected: 0
console.log(stack.getMin()); // Expected: -2`,
      python: `class MinStack:
    def __init__(self):
        # Write your solution here
        pass
    
    def push(self, val):
        # Write your solution here
        pass
    
    def pop(self):
        # Write your solution here
        pass
    
    def top(self):
        # Write your solution here
        pass
    
    def getMin(self):
        # Write your solution here
        pass

# Test cases
stack = MinStack()
stack.push(-2)
stack.push(0)
stack.push(-3)
print(stack.getMin())  # Expected: -3
stack.pop()
print(stack.top())  # Expected: 0
print(stack.getMin())  # Expected: -2`,
      java: `class MinStack {
    // Write your solution here
    
    public MinStack() {
        
    }
    
    public void push(int val) {
        
    }
    
    public void pop() {
        
    }
    
    public int top() {
        return 0;
    }
    
    public int getMin() {
        return 0;
    }
    
    public static void main(String[] args) {
        MinStack stack = new MinStack();
        stack.push(-2);
        stack.push(0);
        stack.push(-3);
        System.out.println(stack.getMin()); // Expected: -3
        stack.pop();
        System.out.println(stack.top()); // Expected: 0
        System.out.println(stack.getMin()); // Expected: -2
    }
}`,
    },
    expectedOutput: {
      javascript: "-3\n0\n-2",
      python: "-3\n0\n-2",
      java: "-3\n0\n-2",
    },
  },

  "reverse-linked-list": {
    id: "reverse-linked-list",
    title: "Reverse Linked List",
    difficulty: "Easy",
    category: "Linked List • Recursion",
    description: {
      text: "Given the head of a singly linked list, reverse the list, and return the reversed list.",
      notes: [],
    },
    examples: [
      {
        input: "head = [1,2,3,4,5]",
        output: "[5,4,3,2,1]",
      },
      {
        input: "head = [1,2]",
        output: "[2,1]",
      },
      {
        input: "head = []",
        output: "[]",
      },
    ],
    constraints: ["The number of nodes in the list is in the range [0, 5000]", "-5000 ≤ Node.val ≤ 5000"],
    starterCode: {
      javascript: `class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function reverseList(head) {
  // Write your solution here
  
}

// Helper to build list from array
function buildList(arr) {
  if (!arr.length) return null;
  let head = new ListNode(arr[0]);
  let cur = head;
  for (let i = 1; i < arr.length; i++) { cur.next = new ListNode(arr[i]); cur = cur.next; }
  return head;
}

// Helper to print list
function printList(head) {
  const res = [];
  while (head) { res.push(head.val); head = head.next; }
  console.log(JSON.stringify(res));
}

// Test cases
printList(reverseList(buildList([1,2,3,4,5]))); // Expected: [5,4,3,2,1]
printList(reverseList(buildList([1,2]))); // Expected: [2,1]
printList(reverseList(buildList([]))); // Expected: []`,
      python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def reverseList(head):
    # Write your solution here
    pass

def build_list(arr):
    if not arr: return None
    head = ListNode(arr[0])
    cur = head
    for v in arr[1:]: cur.next = ListNode(v); cur = cur.next
    return head

def print_list(head):
    res = []
    while head: res.append(head.val); head = head.next
    print(res)

# Test cases
print_list(reverseList(build_list([1,2,3,4,5])))  # Expected: [5,4,3,2,1]
print_list(reverseList(build_list([1,2])))  # Expected: [2,1]
print_list(reverseList(build_list([])))  # Expected: []`,
      java: `class ListNode {
    int val;
    ListNode next;
    ListNode(int val) { this.val = val; }
}

class Solution {
    public static ListNode reverseList(ListNode head) {
        // Write your solution here
        
        return null;
    }
    
    static ListNode buildList(int[] arr) {
        if (arr.length == 0) return null;
        ListNode head = new ListNode(arr[0]);
        ListNode cur = head;
        for (int i = 1; i < arr.length; i++) { cur.next = new ListNode(arr[i]); cur = cur.next; }
        return head;
    }
    
    static void printList(ListNode head) {
        StringBuilder sb = new StringBuilder("[");
        while (head != null) { sb.append(head.val); if (head.next != null) sb.append(", "); head = head.next; }
        sb.append("]");
        System.out.println(sb);
    }
    
    public static void main(String[] args) {
        printList(reverseList(buildList(new int[]{1,2,3,4,5}))); // Expected: [5, 4, 3, 2, 1]
        printList(reverseList(buildList(new int[]{1,2}))); // Expected: [2, 1]
        printList(reverseList(buildList(new int[]{}))); // Expected: []
    }
}`,
    },
    expectedOutput: {
      javascript: "[5,4,3,2,1]\n[2,1]\n[]",
      python: "[5, 4, 3, 2, 1]\n[2, 1]\n[]",
      java: "[5, 4, 3, 2, 1]\n[2, 1]\n[]",
    },
  },

  "merge-two-sorted-lists": {
    id: "merge-two-sorted-lists",
    title: "Merge Two Sorted Lists",
    difficulty: "Easy",
    category: "Linked List • Recursion",
    description: {
      text: "You are given the heads of two sorted linked lists list1 and list2. Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.",
      notes: ["Return the head of the merged linked list."],
    },
    examples: [
      {
        input: "list1 = [1,2,4], list2 = [1,3,4]",
        output: "[1,1,2,3,4,4]",
      },
      {
        input: "list1 = [], list2 = []",
        output: "[]",
      },
      {
        input: "list1 = [], list2 = [0]",
        output: "[0]",
      },
    ],
    constraints: ["The number of nodes in both lists is in the range [0, 50]", "-100 ≤ Node.val ≤ 100"],
    starterCode: {
      javascript: `class ListNode {
  constructor(val, next = null) { this.val = val; this.next = next; }
}

function mergeTwoLists(list1, list2) {
  // Write your solution here
  
}

function buildList(arr) {
  if (!arr.length) return null;
  let head = new ListNode(arr[0]), cur = head;
  for (let i = 1; i < arr.length; i++) { cur.next = new ListNode(arr[i]); cur = cur.next; }
  return head;
}

function printList(head) {
  const res = [];
  while (head) { res.push(head.val); head = head.next; }
  console.log(JSON.stringify(res));
}

// Test cases
printList(mergeTwoLists(buildList([1,2,4]), buildList([1,3,4]))); // Expected: [1,1,2,3,4,4]
printList(mergeTwoLists(buildList([]), buildList([]))); // Expected: []
printList(mergeTwoLists(buildList([]), buildList([0]))); // Expected: [0]`,
      python: `class ListNode:
    def __init__(self, val=0, next=None): self.val = val; self.next = next

def mergeTwoLists(list1, list2):
    # Write your solution here
    pass

def build_list(arr):
    if not arr: return None
    head = ListNode(arr[0]); cur = head
    for v in arr[1:]: cur.next = ListNode(v); cur = cur.next
    return head

def print_list(head):
    res = []
    while head: res.append(head.val); head = head.next
    print(res)

# Test cases
print_list(mergeTwoLists(build_list([1,2,4]), build_list([1,3,4])))  # Expected: [1,1,2,3,4,4]
print_list(mergeTwoLists(build_list([]), build_list([])))  # Expected: []
print_list(mergeTwoLists(build_list([]), build_list([0])))  # Expected: [0]`,
      java: `class ListNode {
    int val; ListNode next;
    ListNode(int val) { this.val = val; }
}

class Solution {
    public static ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        // Write your solution here
        
        return null;
    }
    
    static ListNode buildList(int[] arr) {
        if (arr.length == 0) return null;
        ListNode head = new ListNode(arr[0]), cur = head;
        for (int i = 1; i < arr.length; i++) { cur.next = new ListNode(arr[i]); cur = cur.next; }
        return head;
    }
    
    static void printList(ListNode head) {
        StringBuilder sb = new StringBuilder("[");
        while (head != null) { sb.append(head.val); if (head.next != null) sb.append(", "); head = head.next; }
        System.out.println(sb.append("]"));
    }
    
    public static void main(String[] args) {
        printList(mergeTwoLists(buildList(new int[]{1,2,4}), buildList(new int[]{1,3,4}))); // [1, 1, 2, 3, 4, 4]
        printList(mergeTwoLists(buildList(new int[]{}), buildList(new int[]{}))); // []
        printList(mergeTwoLists(buildList(new int[]{}), buildList(new int[]{0}))); // [0]
    }
}`,
    },
    expectedOutput: {
      javascript: "[1,1,2,3,4,4]\n[]\n[0]",
      python: "[1, 1, 2, 3, 4, 4]\n[]\n[0]",
      java: "[1, 1, 2, 3, 4, 4]\n[]\n[0]",
    },
  },

  "number-of-1-bits": {
    id: "number-of-1-bits",
    title: "Number of 1 Bits",
    difficulty: "Easy",
    category: "Bit Manipulation",
    description: {
      text: "Write a function that takes the binary representation of a positive integer and returns the number of set bits it has (also known as the Hamming weight).",
      notes: [],
    },
    examples: [
      {
        input: "n = 11",
        output: "3",
        explanation: "The input binary string 1011 has a total of three set bits.",
      },
      {
        input: "n = 128",
        output: "1",
        explanation: "The input binary string 10000000 has a total of one set bit.",
      },
      {
        input: "n = 2147483645",
        output: "30",
      },
    ],
    constraints: ["1 ≤ n ≤ 2³¹ - 1"],
    starterCode: {
      javascript: `function hammingWeight(n) {
  // Write your solution here
  
}

// Test cases
console.log(hammingWeight(11)); // Expected: 3
console.log(hammingWeight(128)); // Expected: 1
console.log(hammingWeight(2147483645)); // Expected: 30`,
      python: `def hammingWeight(n):
    # Write your solution here
    pass

# Test cases
print(hammingWeight(11))  # Expected: 3
print(hammingWeight(128))  # Expected: 1
print(hammingWeight(2147483645))  # Expected: 30`,
      java: `class Solution {
    public static int hammingWeight(int n) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(hammingWeight(11)); // Expected: 3
        System.out.println(hammingWeight(128)); // Expected: 1
        System.out.println(hammingWeight(2147483645)); // Expected: 30
    }
}`,
    },
    expectedOutput: {
      javascript: "3\n1\n30",
      python: "3\n1\n30",
      java: "3\n1\n30",
    },
  },

  "counting-bits": {
    id: "counting-bits",
    title: "Counting Bits",
    difficulty: "Easy",
    category: "Dynamic Programming • Bit Manipulation",
    description: {
      text: "Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.",
      notes: [],
    },
    examples: [
      {
        input: "n = 2",
        output: "[0,1,1]",
      },
      {
        input: "n = 5",
        output: "[0,1,1,2,1,2]",
      },
    ],
    constraints: ["0 ≤ n ≤ 10⁵"],
    starterCode: {
      javascript: `function countBits(n) {
  // Write your solution here
  
}

// Test cases
console.log(countBits(2)); // Expected: [0,1,1]
console.log(countBits(5)); // Expected: [0,1,1,2,1,2]`,
      python: `def countBits(n):
    # Write your solution here
    pass

# Test cases
print(countBits(2))  # Expected: [0, 1, 1]
print(countBits(5))  # Expected: [0, 1, 1, 2, 1, 2]`,
      java: `import java.util.*;

class Solution {
    public static int[] countBits(int n) {
        // Write your solution here
        
        return new int[0];
    }
    
    public static void main(String[] args) {
        System.out.println(Arrays.toString(countBits(2))); // Expected: [0, 1, 1]
        System.out.println(Arrays.toString(countBits(5))); // Expected: [0, 1, 1, 2, 1, 2]
    }
}`,
    },
    expectedOutput: {
      javascript: "[0,1,1]\n[0,1,1,2,1,2]",
      python: "[0, 1, 1]\n[0, 1, 1, 2, 1, 2]",
      java: "[0, 1, 1]\n[0, 1, 1, 2, 1, 2]",
    },
  },
  "binary-search": {
    id: "binary-search",
    title: "Binary Search",
    difficulty: "Easy",
    category: "Array • Binary Search",
    description: {
      text: "Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.",
      notes: ["You must write an algorithm with O(log n) runtime complexity."],
    },
    examples: [
      {
        input: "nums = [-1,0,3,5,9,12], target = 9",
        output: "4",
        explanation: "9 exists in nums and its index is 4.",
      },
      {
        input: "nums = [-1,0,3,5,9,12], target = 2",
        output: "-1",
        explanation: "2 does not exist in nums so return -1.",
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁴", "-10⁴ < nums[i], target < 10⁴", "All the integers in nums are unique", "nums is sorted in ascending order"],
    starterCode: {
      javascript: `function search(nums, target) {
  // Write your solution here
  
}

// Test cases
console.log(search([-1,0,3,5,9,12], 9)); // Expected: 4
console.log(search([-1,0,3,5,9,12], 2)); // Expected: -1
console.log(search([5], 5)); // Expected: 0`,
      python: `def search(nums, target):
    # Write your solution here
    pass

# Test cases
print(search([-1,0,3,5,9,12], 9))  # Expected: 4
print(search([-1,0,3,5,9,12], 2))  # Expected: -1
print(search([5], 5))  # Expected: 0`,
      java: `class Solution {
    public static int search(int[] nums, int target) {
        // Write your solution here
        
        return -1;
    }
    
    public static void main(String[] args) {
        System.out.println(search(new int[]{-1,0,3,5,9,12}, 9)); // Expected: 4
        System.out.println(search(new int[]{-1,0,3,5,9,12}, 2)); // Expected: -1
        System.out.println(search(new int[]{5}, 5)); // Expected: 0
    }
}`,
    },
    expectedOutput: {
      javascript: "4\n-1\n0",
      python: "4\n-1\n0",
      java: "4\n-1\n0",
    },
  },

  "linked-list-cycle": {
    id: "linked-list-cycle",
    title: "Linked List Cycle",
    difficulty: "Easy",
    category: "Linked List • Two Pointers",
    description: {
      text: "Given head, the head of a linked list, determine if the linked list has a cycle in it. There is a cycle if there is some node in the list that can be reached again by continuously following the next pointer.",
      notes: ["Return true if there is a cycle in the linked list. Otherwise, return false."],
    },
    examples: [
      {
        input: "head = [3,2,0,-4], pos = 1",
        output: "true",
        explanation: "There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).",
      },
      {
        input: "head = [1,2], pos = 0",
        output: "true",
        explanation: "There is a cycle in the linked list, where the tail connects to the 0th node.",
      },
      {
        input: "head = [1], pos = -1",
        output: "false",
        explanation: "There is no cycle in the linked list.",
      },
    ],
    constraints: ["The number of the nodes in the list is in the range [0, 10⁴]", "-10⁵ ≤ Node.val ≤ 10⁵"],
    starterCode: {
      javascript: `class ListNode {
  constructor(val, next = null) { this.val = val; this.next = next; }
}

function hasCycle(head) {
  // Write your solution here
  
}

// Test cases - build list with cycle
function buildCycleList(arr, pos) {
  if (!arr.length) return null;
  let nodes = arr.map(v => new ListNode(v));
  for (let i = 0; i < nodes.length - 1; i++) nodes[i].next = nodes[i+1];
  if (pos >= 0) nodes[nodes.length - 1].next = nodes[pos];
  return nodes[0];
}

console.log(hasCycle(buildCycleList([3,2,0,-4], 1))); // Expected: true
console.log(hasCycle(buildCycleList([1,2], 0))); // Expected: true
console.log(hasCycle(buildCycleList([1], -1))); // Expected: false`,
      python: `class ListNode:
    def __init__(self, val=0, next=None): self.val = val; self.next = next

def hasCycle(head):
    # Write your solution here
    pass

def build_cycle_list(arr, pos):
    if not arr: return None
    nodes = [ListNode(v) for v in arr]
    for i in range(len(nodes)-1): nodes[i].next = nodes[i+1]
    if pos >= 0: nodes[-1].next = nodes[pos]
    return nodes[0]

# Test cases
print(hasCycle(build_cycle_list([3,2,0,-4], 1)))  # Expected: True
print(hasCycle(build_cycle_list([1,2], 0)))  # Expected: True
print(hasCycle(build_cycle_list([1], -1)))  # Expected: False`,
      java: `class ListNode {
    int val; ListNode next;
    ListNode(int val) { this.val = val; }
}

class Solution {
    public static boolean hasCycle(ListNode head) {
        // Write your solution here
        
        return false;
    }
    
    static ListNode buildCycleList(int[] arr, int pos) {
        if (arr.length == 0) return null;
        ListNode[] nodes = new ListNode[arr.length];
        for (int i = 0; i < arr.length; i++) nodes[i] = new ListNode(arr[i]);
        for (int i = 0; i < arr.length - 1; i++) nodes[i].next = nodes[i+1];
        if (pos >= 0) nodes[arr.length-1].next = nodes[pos];
        return nodes[0];
    }
    
    public static void main(String[] args) {
        System.out.println(hasCycle(buildCycleList(new int[]{3,2,0,-4}, 1))); // Expected: true
        System.out.println(hasCycle(buildCycleList(new int[]{1,2}, 0))); // Expected: true
        System.out.println(hasCycle(buildCycleList(new int[]{1}, -1))); // Expected: false
    }
}`,
    },
    expectedOutput: {
      javascript: "true\ntrue\nfalse",
      python: "True\nTrue\nFalse",
      java: "true\ntrue\nfalse",
    },
  },

  "maximum-depth-of-binary-tree": {
    id: "maximum-depth-of-binary-tree",
    title: "Maximum Depth of Binary Tree",
    difficulty: "Easy",
    category: "Tree • DFS • BFS",
    description: {
      text: "Given the root of a binary tree, return its maximum depth. A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.",
      notes: [],
    },
    examples: [
      {
        input: "root = [3,9,20,null,null,15,7]",
        output: "3",
      },
      {
        input: "root = [1,null,2]",
        output: "2",
      },
    ],
    constraints: ["The number of nodes in the tree is in the range [0, 10⁴]", "-100 ≤ Node.val ≤ 100"],
    starterCode: {
      javascript: `class TreeNode {
  constructor(val, left = null, right = null) { this.val = val; this.left = left; this.right = right; }
}

function maxDepth(root) {
  // Write your solution here
  
}

function buildTree(arr) {
  if (!arr.length || arr[0] === null) return null;
  const root = new TreeNode(arr[0]);
  const queue = [root];
  let i = 1;
  while (queue.length && i < arr.length) {
    const node = queue.shift();
    if (i < arr.length && arr[i] !== null) { node.left = new TreeNode(arr[i]); queue.push(node.left); }
    i++;
    if (i < arr.length && arr[i] !== null) { node.right = new TreeNode(arr[i]); queue.push(node.right); }
    i++;
  }
  return root;
}

// Test cases
console.log(maxDepth(buildTree([3,9,20,null,null,15,7]))); // Expected: 3
console.log(maxDepth(buildTree([1,null,2]))); // Expected: 2
console.log(maxDepth(null)); // Expected: 0`,
      python: `class TreeNode:
    def __init__(self, val=0, left=None, right=None): self.val=val; self.left=left; self.right=right

def maxDepth(root):
    # Write your solution here
    pass

from collections import deque
def build_tree(arr):
    if not arr or arr[0] is None: return None
    root = TreeNode(arr[0]); q = deque([root]); i = 1
    while q and i < len(arr):
        node = q.popleft()
        if i < len(arr) and arr[i] is not None: node.left = TreeNode(arr[i]); q.append(node.left)
        i += 1
        if i < len(arr) and arr[i] is not None: node.right = TreeNode(arr[i]); q.append(node.right)
        i += 1
    return root

# Test cases
print(maxDepth(build_tree([3,9,20,None,None,15,7])))  # Expected: 3
print(maxDepth(build_tree([1,None,2])))  # Expected: 2
print(maxDepth(None))  # Expected: 0`,
      java: `class TreeNode {
    int val; TreeNode left, right;
    TreeNode(int val) { this.val = val; }
}

class Solution {
    public static int maxDepth(TreeNode root) {
        // Write your solution here
        
        return 0;
    }
    
    static TreeNode buildTree(Integer[] arr) {
        if (arr.length == 0 || arr[0] == null) return null;
        TreeNode root = new TreeNode(arr[0]);
        java.util.Queue<TreeNode> q = new java.util.LinkedList<>();
        q.add(root); int i = 1;
        while (!q.isEmpty() && i < arr.length) {
            TreeNode node = q.poll();
            if (i < arr.length && arr[i] != null) { node.left = new TreeNode(arr[i]); q.add(node.left); } i++;
            if (i < arr.length && arr[i] != null) { node.right = new TreeNode(arr[i]); q.add(node.right); } i++;
        }
        return root;
    }
    
    public static void main(String[] args) {
        System.out.println(maxDepth(buildTree(new Integer[]{3,9,20,null,null,15,7}))); // Expected: 3
        System.out.println(maxDepth(buildTree(new Integer[]{1,null,2}))); // Expected: 2
        System.out.println(maxDepth(null)); // Expected: 0
    }
}`,
    },
    expectedOutput: {
      javascript: "3\n2\n0",
      python: "3\n2\n0",
      java: "3\n2\n0",
    },
  },

  "invert-binary-tree": {
    id: "invert-binary-tree",
    title: "Invert Binary Tree",
    difficulty: "Easy",
    category: "Tree • DFS • BFS",
    description: {
      text: "Given the root of a binary tree, invert the tree, and return its root.",
      notes: [],
    },
    examples: [
      {
        input: "root = [4,2,7,1,3,6,9]",
        output: "[4,7,2,9,6,3,1]",
      },
      {
        input: "root = [2,1,3]",
        output: "[2,3,1]",
      },
      {
        input: "root = []",
        output: "[]",
      },
    ],
    constraints: ["The number of nodes in the tree is in the range [0, 100]", "-100 ≤ Node.val ≤ 100"],
    starterCode: {
      javascript: `class TreeNode {
  constructor(val, left = null, right = null) { this.val = val; this.left = left; this.right = right; }
}

function invertTree(root) {
  // Write your solution here
  
}

function buildTree(arr) {
  if (!arr.length || arr[0] === null) return null;
  const root = new TreeNode(arr[0]), queue = [root]; let i = 1;
  while (queue.length && i < arr.length) {
    const node = queue.shift();
    if (arr[i] != null) { node.left = new TreeNode(arr[i]); queue.push(node.left); } i++;
    if (i < arr.length && arr[i] != null) { node.right = new TreeNode(arr[i]); queue.push(node.right); } i++;
  }
  return root;
}

function treeToArray(root) {
  if (!root) return [];
  const res = [], queue = [root];
  while (queue.length) {
    const node = queue.shift();
    if (node) { res.push(node.val); queue.push(node.left, node.right); } else res.push(null);
  }
  while (res[res.length-1] === null) res.pop();
  return res;
}

// Test cases
console.log(JSON.stringify(treeToArray(invertTree(buildTree([4,2,7,1,3,6,9]))))); // Expected: [4,7,2,9,6,3,1]
console.log(JSON.stringify(treeToArray(invertTree(buildTree([2,1,3]))))); // Expected: [2,3,1]
console.log(JSON.stringify(treeToArray(invertTree(null)))); // Expected: []`,
      python: `class TreeNode:
    def __init__(self, val=0, left=None, right=None): self.val=val; self.left=left; self.right=right

def invertTree(root):
    # Write your solution here
    pass

from collections import deque
def build_tree(arr):
    if not arr or arr[0] is None: return None
    root = TreeNode(arr[0]); q = deque([root]); i = 1
    while q and i < len(arr):
        node = q.popleft()
        if i < len(arr) and arr[i] is not None: node.left = TreeNode(arr[i]); q.append(node.left)
        i += 1
        if i < len(arr) and arr[i] is not None: node.right = TreeNode(arr[i]); q.append(node.right)
        i += 1
    return root

def tree_to_array(root):
    if not root: return []
    res, q = [], deque([root])
    while q:
        node = q.popleft()
        if node: res.append(node.val); q.append(node.left); q.append(node.right)
        else: res.append(None)
    while res and res[-1] is None: res.pop()
    return res

# Test cases
print(tree_to_array(invertTree(build_tree([4,2,7,1,3,6,9]))))  # Expected: [4,7,2,9,6,3,1]
print(tree_to_array(invertTree(build_tree([2,1,3]))))  # Expected: [2,3,1]
print(tree_to_array(invertTree(None)))  # Expected: []`,
      java: `class TreeNode {
    int val; TreeNode left, right;
    TreeNode(int val) { this.val = val; }
}

class Solution {
    public static TreeNode invertTree(TreeNode root) {
        // Write your solution here
        
        return null;
    }
    
    static TreeNode buildTree(Integer[] arr) {
        if (arr.length == 0 || arr[0] == null) return null;
        TreeNode root = new TreeNode(arr[0]);
        java.util.Queue<TreeNode> q = new java.util.LinkedList<>();
        q.add(root); int i = 1;
        while (!q.isEmpty() && i < arr.length) {
            TreeNode node = q.poll();
            if (i < arr.length && arr[i] != null) { node.left = new TreeNode(arr[i]); q.add(node.left); } i++;
            if (i < arr.length && arr[i] != null) { node.right = new TreeNode(arr[i]); q.add(node.right); } i++;
        }
        return root;
    }
    
    static java.util.List<Integer> treeToArray(TreeNode root) {
        java.util.List<Integer> res = new java.util.ArrayList<>();
        if (root == null) return res;
        java.util.Queue<TreeNode> q = new java.util.LinkedList<>(); q.add(root);
        while (!q.isEmpty()) {
            TreeNode node = q.poll();
            if (node != null) { res.add(node.val); q.add(node.left); q.add(node.right); } else res.add(null);
        }
        while (!res.isEmpty() && res.get(res.size()-1) == null) res.remove(res.size()-1);
        return res;
    }
    
    public static void main(String[] args) {
        System.out.println(treeToArray(invertTree(buildTree(new Integer[]{4,2,7,1,3,6,9})))); // [4,7,2,9,6,3,1]
        System.out.println(treeToArray(invertTree(buildTree(new Integer[]{2,1,3})))); // [2,3,1]
        System.out.println(treeToArray(invertTree(null))); // []
    }
}`,
    },
    expectedOutput: {
      javascript: "[4,7,2,9,6,3,1]\n[2,3,1]\n[]",
      python: "[4, 7, 2, 9, 6, 3, 1]\n[2, 3, 1]\n[]",
      java: "[4, 7, 2, 9, 6, 3, 1]\n[2, 3, 1]\n[]",
    },
  },

  "balanced-binary-tree": {
    id: "balanced-binary-tree",
    title: "Balanced Binary Tree",
    difficulty: "Easy",
    category: "Tree • DFS",
    description: {
      text: "Given a binary tree, determine if it is height-balanced. A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.",
      notes: [],
    },
    examples: [
      {
        input: "root = [3,9,20,null,null,15,7]",
        output: "true",
      },
      {
        input: "root = [1,2,2,3,3,null,null,4,4]",
        output: "false",
      },
      {
        input: "root = []",
        output: "true",
      },
    ],
    constraints: ["The number of nodes in the tree is in the range [0, 5000]", "-10⁴ ≤ Node.val ≤ 10⁴"],
    starterCode: {
      javascript: `class TreeNode {
  constructor(val, left = null, right = null) { this.val = val; this.left = left; this.right = right; }
}

function isBalanced(root) {
  // Write your solution here
  
}

function buildTree(arr) {
  if (!arr.length || arr[0] === null) return null;
  const root = new TreeNode(arr[0]), queue = [root]; let i = 1;
  while (queue.length && i < arr.length) {
    const node = queue.shift();
    if (arr[i] != null) { node.left = new TreeNode(arr[i]); queue.push(node.left); } i++;
    if (i < arr.length && arr[i] != null) { node.right = new TreeNode(arr[i]); queue.push(node.right); } i++;
  }
  return root;
}

// Test cases
console.log(isBalanced(buildTree([3,9,20,null,null,15,7]))); // Expected: true
console.log(isBalanced(buildTree([1,2,2,3,3,null,null,4,4]))); // Expected: false
console.log(isBalanced(null)); // Expected: true`,
      python: `class TreeNode:
    def __init__(self, val=0, left=None, right=None): self.val=val; self.left=left; self.right=right

def isBalanced(root):
    # Write your solution here
    pass

from collections import deque
def build_tree(arr):
    if not arr or arr[0] is None: return None
    root = TreeNode(arr[0]); q = deque([root]); i = 1
    while q and i < len(arr):
        node = q.popleft()
        if i < len(arr) and arr[i] is not None: node.left = TreeNode(arr[i]); q.append(node.left)
        i += 1
        if i < len(arr) and arr[i] is not None: node.right = TreeNode(arr[i]); q.append(node.right)
        i += 1
    return root

# Test cases
print(isBalanced(build_tree([3,9,20,None,None,15,7])))  # Expected: True
print(isBalanced(build_tree([1,2,2,3,3,None,None,4,4])))  # Expected: False
print(isBalanced(None))  # Expected: True`,
      java: `class TreeNode {
    int val; TreeNode left, right;
    TreeNode(int val) { this.val = val; }
}

class Solution {
    public static boolean isBalanced(TreeNode root) {
        // Write your solution here
        
        return false;
    }
    
    static TreeNode buildTree(Integer[] arr) {
        if (arr.length == 0 || arr[0] == null) return null;
        TreeNode root = new TreeNode(arr[0]);
        java.util.Queue<TreeNode> q = new java.util.LinkedList<>();
        q.add(root); int i = 1;
        while (!q.isEmpty() && i < arr.length) {
            TreeNode node = q.poll();
            if (i < arr.length && arr[i] != null) { node.left = new TreeNode(arr[i]); q.add(node.left); } i++;
            if (i < arr.length && arr[i] != null) { node.right = new TreeNode(arr[i]); q.add(node.right); } i++;
        }
        return root;
    }
    
    public static void main(String[] args) {
        System.out.println(isBalanced(buildTree(new Integer[]{3,9,20,null,null,15,7}))); // Expected: true
        System.out.println(isBalanced(buildTree(new Integer[]{1,2,2,3,3,null,null,4,4}))); // Expected: false
        System.out.println(isBalanced(null)); // Expected: true
    }
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse\ntrue",
      python: "True\nFalse\nTrue",
      java: "true\nfalse\ntrue",
    },
  },

  "diameter-of-binary-tree": {
    id: "diameter-of-binary-tree",
    title: "Diameter of Binary Tree",
    difficulty: "Easy",
    category: "Tree • DFS",
    description: {
      text: "Given the root of a binary tree, return the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.",
      notes: ["The length of a path between two nodes is represented by the number of edges between them."],
    },
    examples: [
      {
        input: "root = [1,2,3,4,5]",
        output: "3",
        explanation: "3 is the length of the path [4,2,1,3] or [5,2,1,3].",
      },
      {
        input: "root = [1,2]",
        output: "1",
      },
    ],
    constraints: ["The number of nodes in the tree is in the range [1, 10⁴]", "-100 ≤ Node.val ≤ 100"],
    starterCode: {
      javascript: `class TreeNode {
  constructor(val, left = null, right = null) { this.val = val; this.left = left; this.right = right; }
}

function diameterOfBinaryTree(root) {
  // Write your solution here
  
}

function buildTree(arr) {
  if (!arr.length || arr[0] === null) return null;
  const root = new TreeNode(arr[0]), queue = [root]; let i = 1;
  while (queue.length && i < arr.length) {
    const node = queue.shift();
    if (arr[i] != null) { node.left = new TreeNode(arr[i]); queue.push(node.left); } i++;
    if (i < arr.length && arr[i] != null) { node.right = new TreeNode(arr[i]); queue.push(node.right); } i++;
  }
  return root;
}

// Test cases
console.log(diameterOfBinaryTree(buildTree([1,2,3,4,5]))); // Expected: 3
console.log(diameterOfBinaryTree(buildTree([1,2]))); // Expected: 1`,
      python: `class TreeNode:
    def __init__(self, val=0, left=None, right=None): self.val=val; self.left=left; self.right=right

def diameterOfBinaryTree(root):
    # Write your solution here
    pass

from collections import deque
def build_tree(arr):
    if not arr or arr[0] is None: return None
    root = TreeNode(arr[0]); q = deque([root]); i = 1
    while q and i < len(arr):
        node = q.popleft()
        if i < len(arr) and arr[i] is not None: node.left = TreeNode(arr[i]); q.append(node.left)
        i += 1
        if i < len(arr) and arr[i] is not None: node.right = TreeNode(arr[i]); q.append(node.right)
        i += 1
    return root

# Test cases
print(diameterOfBinaryTree(build_tree([1,2,3,4,5])))  # Expected: 3
print(diameterOfBinaryTree(build_tree([1,2])))  # Expected: 1`,
      java: `class TreeNode {
    int val; TreeNode left, right;
    TreeNode(int val) { this.val = val; }
}

class Solution {
    public static int diameterOfBinaryTree(TreeNode root) {
        // Write your solution here
        
        return 0;
    }
    
    static TreeNode buildTree(Integer[] arr) {
        if (arr.length == 0 || arr[0] == null) return null;
        TreeNode root = new TreeNode(arr[0]);
        java.util.Queue<TreeNode> q = new java.util.LinkedList<>();
        q.add(root); int i = 1;
        while (!q.isEmpty() && i < arr.length) {
            TreeNode node = q.poll();
            if (i < arr.length && arr[i] != null) { node.left = new TreeNode(arr[i]); q.add(node.left); } i++;
            if (i < arr.length && arr[i] != null) { node.right = new TreeNode(arr[i]); q.add(node.right); } i++;
        }
        return root;
    }
    
    public static void main(String[] args) {
        System.out.println(diameterOfBinaryTree(buildTree(new Integer[]{1,2,3,4,5}))); // Expected: 3
        System.out.println(diameterOfBinaryTree(buildTree(new Integer[]{1,2}))); // Expected: 1
    }
}`,
    },
    expectedOutput: {
      javascript: "3\n1",
      python: "3\n1",
      java: "3\n1",
    },
  },

  "same-tree": {
    id: "same-tree",
    title: "Same Tree",
    difficulty: "Easy",
    category: "Tree • DFS • BFS",
    description: {
      text: "Given the roots of two binary trees p and q, write a function to check if they are the same or not. Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.",
      notes: [],
    },
    examples: [
      {
        input: "p = [1,2,3], q = [1,2,3]",
        output: "true",
      },
      {
        input: "p = [1,2], q = [1,null,2]",
        output: "false",
      },
      {
        input: "p = [1,2,1], q = [1,1,2]",
        output: "false",
      },
    ],
    constraints: ["The number of nodes in both trees is in the range [0, 100]", "-10⁴ ≤ Node.val ≤ 10⁴"],
    starterCode: {
      javascript: `class TreeNode {
  constructor(val, left = null, right = null) { this.val = val; this.left = left; this.right = right; }
}

function isSameTree(p, q) {
  // Write your solution here
  
}

function buildTree(arr) {
  if (!arr.length || arr[0] === null) return null;
  const root = new TreeNode(arr[0]), queue = [root]; let i = 1;
  while (queue.length && i < arr.length) {
    const node = queue.shift();
    if (arr[i] != null) { node.left = new TreeNode(arr[i]); queue.push(node.left); } i++;
    if (i < arr.length && arr[i] != null) { node.right = new TreeNode(arr[i]); queue.push(node.right); } i++;
  }
  return root;
}

// Test cases
console.log(isSameTree(buildTree([1,2,3]), buildTree([1,2,3]))); // Expected: true
console.log(isSameTree(buildTree([1,2]), buildTree([1,null,2]))); // Expected: false
console.log(isSameTree(buildTree([1,2,1]), buildTree([1,1,2]))); // Expected: false`,
      python: `class TreeNode:
    def __init__(self, val=0, left=None, right=None): self.val=val; self.left=left; self.right=right

def isSameTree(p, q):
    # Write your solution here
    pass

from collections import deque
def build_tree(arr):
    if not arr or arr[0] is None: return None
    root = TreeNode(arr[0]); q = deque([root]); i = 1
    while q and i < len(arr):
        node = q.popleft()
        if i < len(arr) and arr[i] is not None: node.left = TreeNode(arr[i]); q.append(node.left)
        i += 1
        if i < len(arr) and arr[i] is not None: node.right = TreeNode(arr[i]); q.append(node.right)
        i += 1
    return root

# Test cases
print(isSameTree(build_tree([1,2,3]), build_tree([1,2,3])))  # Expected: True
print(isSameTree(build_tree([1,2]), build_tree([1,None,2])))  # Expected: False
print(isSameTree(build_tree([1,2,1]), build_tree([1,1,2])))  # Expected: False`,
      java: `class TreeNode {
    int val; TreeNode left, right;
    TreeNode(int val) { this.val = val; }
}

class Solution {
    public static boolean isSameTree(TreeNode p, TreeNode q) {
        // Write your solution here
        
        return false;
    }
    
    static TreeNode buildTree(Integer[] arr) {
        if (arr.length == 0 || arr[0] == null) return null;
        TreeNode root = new TreeNode(arr[0]);
        java.util.Queue<TreeNode> queue = new java.util.LinkedList<>();
        queue.add(root); int i = 1;
        while (!queue.isEmpty() && i < arr.length) {
            TreeNode node = queue.poll();
            if (i < arr.length && arr[i] != null) { node.left = new TreeNode(arr[i]); queue.add(node.left); } i++;
            if (i < arr.length && arr[i] != null) { node.right = new TreeNode(arr[i]); queue.add(node.right); } i++;
        }
        return root;
    }
    
    public static void main(String[] args) {
        System.out.println(isSameTree(buildTree(new Integer[]{1,2,3}), buildTree(new Integer[]{1,2,3}))); // true
        System.out.println(isSameTree(buildTree(new Integer[]{1,2}), buildTree(new Integer[]{1,null,2}))); // false
        System.out.println(isSameTree(buildTree(new Integer[]{1,2,1}), buildTree(new Integer[]{1,1,2}))); // false
    }
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse\nfalse",
      python: "True\nFalse\nFalse",
      java: "true\nfalse\nfalse",
    },
  },

  "subtree-of-another-tree": {
    id: "subtree-of-another-tree",
    title: "Subtree of Another Tree",
    difficulty: "Easy",
    category: "Tree • DFS • String Matching",
    description: {
      text: "Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values as subRoot and false otherwise.",
      notes: ["A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants."],
    },
    examples: [
      {
        input: "root = [3,4,5,1,2], subRoot = [4,1,2]",
        output: "true",
      },
      {
        input: "root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]",
        output: "false",
      },
    ],
    constraints: ["The number of nodes in root is in the range [1, 2000]", "The number of nodes in subRoot is in the range [1, 1000]", "-10⁴ ≤ root.val, subRoot.val ≤ 10⁴"],
    starterCode: {
      javascript: `class TreeNode {
  constructor(val, left = null, right = null) { this.val = val; this.left = left; this.right = right; }
}

function isSubtree(root, subRoot) {
  // Write your solution here
  
}

function buildTree(arr) {
  if (!arr.length || arr[0] === null) return null;
  const root = new TreeNode(arr[0]), queue = [root]; let i = 1;
  while (queue.length && i < arr.length) {
    const node = queue.shift();
    if (arr[i] != null) { node.left = new TreeNode(arr[i]); queue.push(node.left); } i++;
    if (i < arr.length && arr[i] != null) { node.right = new TreeNode(arr[i]); queue.push(node.right); } i++;
  }
  return root;
}

// Test cases
console.log(isSubtree(buildTree([3,4,5,1,2]), buildTree([4,1,2]))); // Expected: true
console.log(isSubtree(buildTree([3,4,5,1,2,null,null,null,null,0]), buildTree([4,1,2]))); // Expected: false`,
      python: `class TreeNode:
    def __init__(self, val=0, left=None, right=None): self.val=val; self.left=left; self.right=right

def isSubtree(root, subRoot):
    # Write your solution here
    pass

from collections import deque
def build_tree(arr):
    if not arr or arr[0] is None: return None
    root = TreeNode(arr[0]); q = deque([root]); i = 1
    while q and i < len(arr):
        node = q.popleft()
        if i < len(arr) and arr[i] is not None: node.left = TreeNode(arr[i]); q.append(node.left)
        i += 1
        if i < len(arr) and arr[i] is not None: node.right = TreeNode(arr[i]); q.append(node.right)
        i += 1
    return root

# Test cases
print(isSubtree(build_tree([3,4,5,1,2]), build_tree([4,1,2])))  # Expected: True
print(isSubtree(build_tree([3,4,5,1,2,None,None,None,None,0]), build_tree([4,1,2])))  # Expected: False`,
      java: `class TreeNode {
    int val; TreeNode left, right;
    TreeNode(int val) { this.val = val; }
}

class Solution {
    public static boolean isSubtree(TreeNode root, TreeNode subRoot) {
        // Write your solution here
        
        return false;
    }
    
    static TreeNode buildTree(Integer[] arr) {
        if (arr.length == 0 || arr[0] == null) return null;
        TreeNode root = new TreeNode(arr[0]);
        java.util.Queue<TreeNode> q = new java.util.LinkedList<>();
        q.add(root); int i = 1;
        while (!q.isEmpty() && i < arr.length) {
            TreeNode node = q.poll();
            if (i < arr.length && arr[i] != null) { node.left = new TreeNode(arr[i]); q.add(node.left); } i++;
            if (i < arr.length && arr[i] != null) { node.right = new TreeNode(arr[i]); q.add(node.right); } i++;
        }
        return root;
    }
    
    public static void main(String[] args) {
        System.out.println(isSubtree(buildTree(new Integer[]{3,4,5,1,2}), buildTree(new Integer[]{4,1,2}))); // true
        System.out.println(isSubtree(buildTree(new Integer[]{3,4,5,1,2,null,null,null,null,0}), buildTree(new Integer[]{4,1,2}))); // false
    }
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse",
      python: "True\nFalse",
      java: "true\nfalse",
    },
  },

  "lowest-common-ancestor-bst": {
    id: "lowest-common-ancestor-bst",
    title: "Lowest Common Ancestor of a BST",
    difficulty: "Medium",
    category: "Tree • DFS • BST",
    description: {
      text: "Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST. The LCA is defined as the lowest node in the tree that has both p and q as descendants (a node can be a descendant of itself).",
      notes: [],
    },
    examples: [
      {
        input: "root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8",
        output: "6",
        explanation: "The LCA of nodes 2 and 8 is 6.",
      },
      {
        input: "root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4",
        output: "2",
        explanation: "The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself.",
      },
    ],
    constraints: ["The number of nodes in the tree is in the range [2, 10⁵]", "-10⁹ ≤ Node.val ≤ 10⁹", "All Node.val are unique", "p != q"],
    starterCode: {
      javascript: `class TreeNode {
  constructor(val, left = null, right = null) { this.val = val; this.left = left; this.right = right; }
}

function lowestCommonAncestor(root, p, q) {
  // Write your solution here
  
}

function buildTree(arr) {
  if (!arr.length || arr[0] === null) return null;
  const root = new TreeNode(arr[0]), queue = [root]; let i = 1;
  while (queue.length && i < arr.length) {
    const node = queue.shift();
    if (arr[i] != null) { node.left = new TreeNode(arr[i]); queue.push(node.left); } i++;
    if (i < arr.length && arr[i] != null) { node.right = new TreeNode(arr[i]); queue.push(node.right); } i++;
  }
  return root;
}

function findNode(root, val) {
  if (!root) return null;
  if (root.val === val) return root;
  return findNode(root.left, val) || findNode(root.right, val);
}

// Test cases
const tree1 = buildTree([6,2,8,0,4,7,9,null,null,3,5]);
console.log(lowestCommonAncestor(tree1, findNode(tree1,2), findNode(tree1,8)).val); // Expected: 6
console.log(lowestCommonAncestor(tree1, findNode(tree1,2), findNode(tree1,4)).val); // Expected: 2`,
      python: `class TreeNode:
    def __init__(self, val=0, left=None, right=None): self.val=val; self.left=left; self.right=right

def lowestCommonAncestor(root, p, q):
    # Write your solution here
    pass

from collections import deque
def build_tree(arr):
    if not arr or arr[0] is None: return None
    root = TreeNode(arr[0]); que = deque([root]); i = 1
    while que and i < len(arr):
        node = que.popleft()
        if i < len(arr) and arr[i] is not None: node.left = TreeNode(arr[i]); que.append(node.left)
        i += 1
        if i < len(arr) and arr[i] is not None: node.right = TreeNode(arr[i]); que.append(node.right)
        i += 1
    return root

def find_node(root, val):
    if not root: return None
    if root.val == val: return root
    return find_node(root.left, val) or find_node(root.right, val)

# Test cases
tree1 = build_tree([6,2,8,0,4,7,9,None,None,3,5])
print(lowestCommonAncestor(tree1, find_node(tree1,2), find_node(tree1,8)).val)  # Expected: 6
print(lowestCommonAncestor(tree1, find_node(tree1,2), find_node(tree1,4)).val)  # Expected: 2`,
      java: `class TreeNode {
    int val; TreeNode left, right;
    TreeNode(int val) { this.val = val; }
}

class Solution {
    public static TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        // Write your solution here
        
        return null;
    }
    
    static TreeNode buildTree(Integer[] arr) {
        if (arr.length == 0 || arr[0] == null) return null;
        TreeNode root = new TreeNode(arr[0]);
        java.util.Queue<TreeNode> que = new java.util.LinkedList<>();
        que.add(root); int i = 1;
        while (!que.isEmpty() && i < arr.length) {
            TreeNode node = que.poll();
            if (i < arr.length && arr[i] != null) { node.left = new TreeNode(arr[i]); que.add(node.left); } i++;
            if (i < arr.length && arr[i] != null) { node.right = new TreeNode(arr[i]); que.add(node.right); } i++;
        }
        return root;
    }
    
    static TreeNode findNode(TreeNode root, int val) {
        if (root == null) return null;
        if (root.val == val) return root;
        TreeNode left = findNode(root.left, val);
        return left != null ? left : findNode(root.right, val);
    }
    
    public static void main(String[] args) {
        TreeNode tree1 = buildTree(new Integer[]{6,2,8,0,4,7,9,null,null,3,5});
        System.out.println(lowestCommonAncestor(tree1, findNode(tree1,2), findNode(tree1,8)).val); // 6
        System.out.println(lowestCommonAncestor(tree1, findNode(tree1,2), findNode(tree1,4)).val); // 2
    }
}`,
    },
    expectedOutput: {
      javascript: "6\n2",
      python: "6\n2",
      java: "6\n2",
    },
  },

  "level-order-traversal": {
    id: "level-order-traversal",
    title: "Binary Tree Level Order Traversal",
    difficulty: "Medium",
    category: "Tree • BFS",
    description: {
      text: "Given the root of a binary tree, return the level order traversal of its nodes' values (i.e., from left to right, level by level).",
      notes: [],
    },
    examples: [
      {
        input: "root = [3,9,20,null,null,15,7]",
        output: "[[3],[9,20],[15,7]]",
      },
      {
        input: "root = [1]",
        output: "[[1]]",
      },
      {
        input: "root = []",
        output: "[]",
      },
    ],
    constraints: ["The number of nodes in the tree is in the range [0, 2000]", "-1000 ≤ Node.val ≤ 1000"],
    starterCode: {
      javascript: `class TreeNode {
  constructor(val, left = null, right = null) { this.val = val; this.left = left; this.right = right; }
}

function levelOrder(root) {
  // Write your solution here
  
}

function buildTree(arr) {
  if (!arr.length || arr[0] === null) return null;
  const root = new TreeNode(arr[0]), queue = [root]; let i = 1;
  while (queue.length && i < arr.length) {
    const node = queue.shift();
    if (arr[i] != null) { node.left = new TreeNode(arr[i]); queue.push(node.left); } i++;
    if (i < arr.length && arr[i] != null) { node.right = new TreeNode(arr[i]); queue.push(node.right); } i++;
  }
  return root;
}

// Test cases
console.log(JSON.stringify(levelOrder(buildTree([3,9,20,null,null,15,7])))); // Expected: [[3],[9,20],[15,7]]
console.log(JSON.stringify(levelOrder(buildTree([1])))); // Expected: [[1]]
console.log(JSON.stringify(levelOrder(null))); // Expected: []`,
      python: `class TreeNode:
    def __init__(self, val=0, left=None, right=None): self.val=val; self.left=left; self.right=right

def levelOrder(root):
    # Write your solution here
    pass

from collections import deque
def build_tree(arr):
    if not arr or arr[0] is None: return None
    root = TreeNode(arr[0]); q = deque([root]); i = 1
    while q and i < len(arr):
        node = q.popleft()
        if i < len(arr) and arr[i] is not None: node.left = TreeNode(arr[i]); q.append(node.left)
        i += 1
        if i < len(arr) and arr[i] is not None: node.right = TreeNode(arr[i]); q.append(node.right)
        i += 1
    return root

# Test cases
print(levelOrder(build_tree([3,9,20,None,None,15,7])))  # Expected: [[3], [9, 20], [15, 7]]
print(levelOrder(build_tree([1])))  # Expected: [[1]]
print(levelOrder(None))  # Expected: []`,
      java: `import java.util.*;

class TreeNode {
    int val; TreeNode left, right;
    TreeNode(int val) { this.val = val; }
}

class Solution {
    public static List<List<Integer>> levelOrder(TreeNode root) {
        // Write your solution here
        
        return new ArrayList<>();
    }
    
    static TreeNode buildTree(Integer[] arr) {
        if (arr.length == 0 || arr[0] == null) return null;
        TreeNode root = new TreeNode(arr[0]);
        Queue<TreeNode> q = new LinkedList<>();
        q.add(root); int i = 1;
        while (!q.isEmpty() && i < arr.length) {
            TreeNode node = q.poll();
            if (i < arr.length && arr[i] != null) { node.left = new TreeNode(arr[i]); q.add(node.left); } i++;
            if (i < arr.length && arr[i] != null) { node.right = new TreeNode(arr[i]); q.add(node.right); } i++;
        }
        return root;
    }
    
    public static void main(String[] args) {
        System.out.println(levelOrder(buildTree(new Integer[]{3,9,20,null,null,15,7}))); // [[3],[9,20],[15,7]]
        System.out.println(levelOrder(buildTree(new Integer[]{1}))); // [[1]]
        System.out.println(levelOrder(null)); // []
    }
}`,
    },
    expectedOutput: {
      javascript: "[[3],[9,20],[15,7]]\n[[1]]\n[]",
      python: "[[3], [9, 20], [15, 7]]\n[[1]]\n[]",
      java: "[[3], [9, 20], [15, 7]]\n[[1]]\n[]",
    },
  },

  "validate-bst": {
    id: "validate-bst",
    title: "Validate Binary Search Tree",
    difficulty: "Medium",
    category: "Tree • DFS • BST",
    description: {
      text: "Given the root of a binary tree, determine if it is a valid binary search tree (BST). A valid BST is defined as: the left subtree of a node contains only nodes with keys less than the node's key, the right subtree contains only nodes with keys greater than the node's key, and both subtrees must also be BSTs.",
      notes: [],
    },
    examples: [
      {
        input: "root = [2,1,3]",
        output: "true",
      },
      {
        input: "root = [5,1,4,null,null,3,6]",
        output: "false",
        explanation: "The root node's value is 5 but its right child's value is 4.",
      },
    ],
    constraints: ["The number of nodes in the tree is in the range [1, 10⁴]", "-2³¹ ≤ Node.val ≤ 2³¹ - 1"],
    starterCode: {
      javascript: `class TreeNode {
  constructor(val, left = null, right = null) { this.val = val; this.left = left; this.right = right; }
}

function isValidBST(root) {
  // Write your solution here
  
}

function buildTree(arr) {
  if (!arr.length || arr[0] === null) return null;
  const root = new TreeNode(arr[0]), queue = [root]; let i = 1;
  while (queue.length && i < arr.length) {
    const node = queue.shift();
    if (arr[i] != null) { node.left = new TreeNode(arr[i]); queue.push(node.left); } i++;
    if (i < arr.length && arr[i] != null) { node.right = new TreeNode(arr[i]); queue.push(node.right); } i++;
  }
  return root;
}

// Test cases
console.log(isValidBST(buildTree([2,1,3]))); // Expected: true
console.log(isValidBST(buildTree([5,1,4,null,null,3,6]))); // Expected: false
console.log(isValidBST(buildTree([5,4,6,null,null,3,7]))); // Expected: false`,
      python: `class TreeNode:
    def __init__(self, val=0, left=None, right=None): self.val=val; self.left=left; self.right=right

def isValidBST(root):
    # Write your solution here
    pass

from collections import deque
def build_tree(arr):
    if not arr or arr[0] is None: return None
    root = TreeNode(arr[0]); q = deque([root]); i = 1
    while q and i < len(arr):
        node = q.popleft()
        if i < len(arr) and arr[i] is not None: node.left = TreeNode(arr[i]); q.append(node.left)
        i += 1
        if i < len(arr) and arr[i] is not None: node.right = TreeNode(arr[i]); q.append(node.right)
        i += 1
    return root

# Test cases
print(isValidBST(build_tree([2,1,3])))  # Expected: True
print(isValidBST(build_tree([5,1,4,None,None,3,6])))  # Expected: False
print(isValidBST(build_tree([5,4,6,None,None,3,7])))  # Expected: False`,
      java: `class TreeNode {
    int val; TreeNode left, right;
    TreeNode(int val) { this.val = val; }
}

class Solution {
    public static boolean isValidBST(TreeNode root) {
        // Write your solution here
        
        return false;
    }
    
    static TreeNode buildTree(Integer[] arr) {
        if (arr.length == 0 || arr[0] == null) return null;
        TreeNode root = new TreeNode(arr[0]);
        java.util.Queue<TreeNode> q = new java.util.LinkedList<>();
        q.add(root); int i = 1;
        while (!q.isEmpty() && i < arr.length) {
            TreeNode node = q.poll();
            if (i < arr.length && arr[i] != null) { node.left = new TreeNode(arr[i]); q.add(node.left); } i++;
            if (i < arr.length && arr[i] != null) { node.right = new TreeNode(arr[i]); q.add(node.right); } i++;
        }
        return root;
    }
    
    public static void main(String[] args) {
        System.out.println(isValidBST(buildTree(new Integer[]{2,1,3}))); // Expected: true
        System.out.println(isValidBST(buildTree(new Integer[]{5,1,4,null,null,3,6}))); // Expected: false
        System.out.println(isValidBST(buildTree(new Integer[]{5,4,6,null,null,3,7}))); // Expected: false
    }
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse\nfalse",
      python: "True\nFalse\nFalse",
      java: "true\nfalse\nfalse",
    },
  },

  "number-of-islands": {
    id: "number-of-islands",
    title: "Number of Islands",
    difficulty: "Medium",
    category: "Graph • DFS • BFS • Matrix",
    description: {
      text: "Given an m x n 2D binary grid which represents a map of '1's (land) and '0's (water), return the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.",
      notes: ["You may assume all four edges of the grid are all surrounded by water."],
    },
    examples: [
      {
        input: 'grid = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]',
        output: "1",
      },
      {
        input: 'grid = [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]',
        output: "3",
      },
    ],
    constraints: ["m == grid.length", "n == grid[i].length", "1 ≤ m, n ≤ 300", "grid[i][j] is '0' or '1'"],
    starterCode: {
      javascript: `function numIslands(grid) {
  // Write your solution here
  
}

// Test cases
console.log(numIslands([["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]])); // Expected: 1
console.log(numIslands([["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]])); // Expected: 3`,
      python: `def numIslands(grid):
    # Write your solution here
    pass

# Test cases
print(numIslands([["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]))  # Expected: 1
print(numIslands([["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]))  # Expected: 3`,
      java: `class Solution {
    public static int numIslands(char[][] grid) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        char[][] grid1 = {{'1','1','1','1','0'},{'1','1','0','1','0'},{'1','1','0','0','0'},{'0','0','0','0','0'}};
        System.out.println(numIslands(grid1)); // Expected: 1
        
        char[][] grid2 = {{'1','1','0','0','0'},{'1','1','0','0','0'},{'0','0','1','0','0'},{'0','0','0','1','1'}};
        System.out.println(numIslands(grid2)); // Expected: 3
    }
}`,
    },
    expectedOutput: {
      javascript: "1\n3",
      python: "1\n3",
      java: "1\n3",
    },
  },

  "clone-graph": {
    id: "clone-graph",
    title: "Clone Graph",
    difficulty: "Medium",
    category: "Graph • DFS • BFS • Hash Table",
    description: {
      text: "Given a reference of a node in a connected undirected graph, return a deep copy (clone) of the graph. Each node in the graph contains a value (int) and a list of its neighbors.",
      notes: ["The given node will always be the first node with val = 1."],
    },
    examples: [
      {
        input: "adjList = [[2,4],[1,3],[2,4],[1,3]]",
        output: "[[2,4],[1,3],[2,4],[1,3]]",
        explanation: "There are 4 nodes in the graph. Node 1's neighbors are nodes 2 and 4. Node 2's neighbors are nodes 1 and 3. Node 3's neighbors are nodes 2 and 4. Node 4's neighbors are nodes 1 and 3.",
      },
      {
        input: "adjList = [[]]",
        output: "[[]]",
        explanation: "The graph has only one node with val = 1 and no neighbors.",
      },
    ],
    constraints: ["The number of nodes in the graph is in the range [0, 100]", "1 ≤ Node.val ≤ 100", "Node.val is unique for each node", "There are no repeated edges and no self-loops"],
    starterCode: {
      javascript: `class Node {
  constructor(val, neighbors = []) { this.val = val; this.neighbors = neighbors; }
}

function cloneGraph(node) {
  // Write your solution here
  
}

function buildGraph(adjList) {
  if (!adjList.length) return null;
  const nodes = adjList.map((_, i) => new Node(i + 1));
  adjList.forEach((neighbors, i) => { nodes[i].neighbors = neighbors.map(n => nodes[n - 1]); });
  return nodes[0];
}

function graphToAdjList(node) {
  if (!node) return [];
  const visited = new Map(), result = [];
  const dfs = (n) => {
    if (visited.has(n.val)) return;
    visited.set(n.val, n);
    result[n.val - 1] = n.neighbors.map(nb => nb.val);
    n.neighbors.forEach(dfs);
  };
  dfs(node);
  return result;
}

// Test cases
console.log(JSON.stringify(graphToAdjList(cloneGraph(buildGraph([[2,4],[1,3],[2,4],[1,3]]))))); // [[2,4],[1,3],[2,4],[1,3]]
console.log(JSON.stringify(graphToAdjList(cloneGraph(buildGraph([[]]))))); // [[]]`,
      python: `class Node:
    def __init__(self, val=0, neighbors=None): self.val=val; self.neighbors=neighbors or []

def cloneGraph(node):
    # Write your solution here
    pass

def build_graph(adj_list):
    if not adj_list: return None
    nodes = [Node(i+1) for i in range(len(adj_list))]
    for i, neighbors in enumerate(adj_list): nodes[i].neighbors = [nodes[n-1] for n in neighbors]
    return nodes[0]

def graph_to_adj(node):
    if not node: return []
    visited, result = {}, {}
    def dfs(n):
        if n.val in visited: return
        visited[n.val] = n; result[n.val] = [nb.val for nb in n.neighbors]
        for nb in n.neighbors: dfs(nb)
    dfs(node)
    return [result[i] for i in sorted(result)]

# Test cases
print(graph_to_adj(cloneGraph(build_graph([[2,4],[1,3],[2,4],[1,3]]))))  # [[2,4],[1,3],[2,4],[1,3]]
print(graph_to_adj(cloneGraph(build_graph([[]]))))  # [[]]`,
      java: `import java.util.*;

class Node {
    int val; List<Node> neighbors;
    Node(int val) { this.val = val; this.neighbors = new ArrayList<>(); }
}

class Solution {
    public static Node cloneGraph(Node node) {
        // Write your solution here
        
        return null;
    }
    
    static Node buildGraph(int[][] adjList) {
        if (adjList.length == 0) return null;
        Node[] nodes = new Node[adjList.length];
        for (int i = 0; i < adjList.length; i++) nodes[i] = new Node(i+1);
        for (int i = 0; i < adjList.length; i++)
            for (int n : adjList[i]) nodes[i].neighbors.add(nodes[n-1]);
        return nodes[0];
    }
    
    static List<List<Integer>> graphToAdj(Node node) {
        if (node == null) return new ArrayList<>();
        Map<Integer,Node> visited = new HashMap<>(); Map<Integer,List<Integer>> result = new TreeMap<>();
        Deque<Node> stack = new ArrayDeque<>(); stack.push(node);
        while (!stack.isEmpty()) {
            Node n = stack.pop();
            if (visited.containsKey(n.val)) continue;
            visited.put(n.val, n); List<Integer> nbs = new ArrayList<>();
            for (Node nb : n.neighbors) { nbs.add(nb.val); stack.push(nb); }
            result.put(n.val, nbs);
        }
        return new ArrayList<>(result.values());
    }
    
    public static void main(String[] args) {
        System.out.println(graphToAdj(cloneGraph(buildGraph(new int[][]{{2,4},{1,3},{2,4},{1,3}})))); // [[2,4],[1,3],[2,4],[1,3]]
        System.out.println(graphToAdj(cloneGraph(buildGraph(new int[][]{{}}))));  // [[]]
    }
}`,
    },
    expectedOutput: {
      javascript: "[[2,4],[1,3],[2,4],[1,3]]\n[[]]",
      python: "[[2, 4], [1, 3], [2, 4], [1, 3]]\n[[]]",
      java: "[[2, 4], [1, 3], [2, 4], [1, 3]]\n[[]]",
    },
  },

  "course-schedule": {
    id: "course-schedule",
    title: "Course Schedule",
    difficulty: "Medium",
    category: "Graph • DFS • Topological Sort",
    description: {
      text: "There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai. Return true if you can finish all courses. Otherwise, return false.",
      notes: [],
    },
    examples: [
      {
        input: "numCourses = 2, prerequisites = [[1,0]]",
        output: "true",
        explanation: "There are 2 courses to take. To take course 1 you should have finished course 0. So it is possible.",
      },
      {
        input: "numCourses = 2, prerequisites = [[1,0],[0,1]]",
        output: "false",
        explanation: "There are 2 courses to take. To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.",
      },
    ],
    constraints: ["1 ≤ numCourses ≤ 2000", "0 ≤ prerequisites.length ≤ 5000", "prerequisites[i].length == 2", "All the pairs prerequisites[i] are unique"],
    starterCode: {
      javascript: `function canFinish(numCourses, prerequisites) {
  // Write your solution here
  
}

// Test cases
console.log(canFinish(2, [[1,0]])); // Expected: true
console.log(canFinish(2, [[1,0],[0,1]])); // Expected: false
console.log(canFinish(1, [])); // Expected: true`,
      python: `def canFinish(numCourses, prerequisites):
    # Write your solution here
    pass

# Test cases
print(canFinish(2, [[1,0]]))  # Expected: True
print(canFinish(2, [[1,0],[0,1]]))  # Expected: False
print(canFinish(1, []))  # Expected: True`,
      java: `class Solution {
    public static boolean canFinish(int numCourses, int[][] prerequisites) {
        // Write your solution here
        
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(canFinish(2, new int[][]{{1,0}})); // Expected: true
        System.out.println(canFinish(2, new int[][]{{1,0},{0,1}})); // Expected: false
        System.out.println(canFinish(1, new int[][]{})); // Expected: true
    }
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse\ntrue",
      python: "True\nFalse\nTrue",
      java: "true\nfalse\ntrue",
    },
  },

  "word-search": {
    id: "word-search",
    title: "Word Search",
    difficulty: "Medium",
    category: "Array • Backtracking • Matrix",
    description: {
      text: "Given an m x n grid of characters board and a string word, return true if word exists in the grid. The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.",
      notes: [],
    },
    examples: [
      {
        input: 'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"',
        output: "true",
      },
      {
        input: 'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"',
        output: "true",
      },
      {
        input: 'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"',
        output: "false",
      },
    ],
    constraints: ["m == board.length", "n = board[i].length", "1 ≤ m, n ≤ 6", "1 ≤ word.length ≤ 15", "board and word consist of only lowercase and uppercase English letters"],
    starterCode: {
      javascript: `function exist(board, word) {
  // Write your solution here
  
}

// Test cases
const board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]];
console.log(exist(board, "ABCCED")); // Expected: true
console.log(exist(board, "SEE")); // Expected: true
console.log(exist(board, "ABCB")); // Expected: false`,
      python: `def exist(board, word):
    # Write your solution here
    pass

# Test cases
board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]
print(exist(board, "ABCCED"))  # Expected: True
print(exist(board, "SEE"))  # Expected: True
print(exist(board, "ABCB"))  # Expected: False`,
      java: `class Solution {
    public static boolean exist(char[][] board, String word) {
        // Write your solution here
        
        return false;
    }
    
    public static void main(String[] args) {
        char[][] board = {{'A','B','C','E'},{'S','F','C','S'},{'A','D','E','E'}};
        System.out.println(exist(board, "ABCCED")); // Expected: true
        System.out.println(exist(board, "SEE")); // Expected: true
        System.out.println(exist(board, "ABCB")); // Expected: false
    }
}`,
    },
    expectedOutput: {
      javascript: "true\ntrue\nfalse",
      python: "True\nTrue\nFalse",
      java: "true\ntrue\nfalse",
    },
  },

  "missing-number": {
    id: "missing-number",
    title: "Missing Number",
    difficulty: "Easy",
    category: "Array • Math • Bit Manipulation",
    description: {
      text: "Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.",
      notes: [],
    },
    examples: [
      {
        input: "nums = [3,0,1]",
        output: "2",
        explanation: "n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number.",
      },
      {
        input: "nums = [0,1]",
        output: "2",
        explanation: "n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number.",
      },
      {
        input: "nums = [9,6,4,2,3,5,7,0,1]",
        output: "8",
      },
    ],
    constraints: ["n == nums.length", "1 ≤ n ≤ 10⁴", "0 ≤ nums[i] ≤ n", "All the numbers of nums are unique"],
    starterCode: {
      javascript: `function missingNumber(nums) {
  // Write your solution here
  
}

// Test cases
console.log(missingNumber([3,0,1])); // Expected: 2
console.log(missingNumber([0,1])); // Expected: 2
console.log(missingNumber([9,6,4,2,3,5,7,0,1])); // Expected: 8`,
      python: `def missingNumber(nums):
    # Write your solution here
    pass

# Test cases
print(missingNumber([3,0,1]))  # Expected: 2
print(missingNumber([0,1]))  # Expected: 2
print(missingNumber([9,6,4,2,3,5,7,0,1]))  # Expected: 8`,
      java: `class Solution {
    public static int missingNumber(int[] nums) {
        // Write your solution here
        
        return -1;
    }
    
    public static void main(String[] args) {
        System.out.println(missingNumber(new int[]{3,0,1})); // Expected: 2
        System.out.println(missingNumber(new int[]{0,1})); // Expected: 2
        System.out.println(missingNumber(new int[]{9,6,4,2,3,5,7,0,1})); // Expected: 8
    }
}`,
    },
    expectedOutput: {
      javascript: "2\n2\n8",
      python: "2\n2\n8",
      java: "2\n2\n8",
    },
  },

  "reverse-bits": {
    id: "reverse-bits",
    title: "Reverse Bits",
    difficulty: "Easy",
    category: "Bit Manipulation",
    description: {
      text: "Reverse bits of a given 32 bits unsigned integer.",
      notes: ["In some languages such as Java, there is no unsigned integer type. In this case, both input and output will be given as a signed integer type. They should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned."],
    },
    examples: [
      {
        input: "n = 00000010100101000001111010011100",
        output: "964176192",
        explanation: "The input binary string 00000010100101000001111010011100 represents the unsigned integer 43261596, so return 964176192 which its binary representation is 00111001011110000010100101000000.",
      },
      {
        input: "n = 11111111111111111111111111111101",
        output: "3221225471",
        explanation: "The input binary string 11111111111111111111111111111101 represents the unsigned integer 4294967293, so return 3221225471.",
      },
    ],
    constraints: ["The input must be a binary string of length 32"],
    starterCode: {
      javascript: `function reverseBits(n) {
  // Write your solution here
  
}

// Test cases
console.log(reverseBits(43261596)); // Expected: 964176192
console.log(reverseBits(4294967293)); // Expected: 3221225471`,
      python: `def reverseBits(n):
    # Write your solution here
    pass

# Test cases
print(reverseBits(43261596))  # Expected: 964176192
print(reverseBits(4294967293))  # Expected: 3221225471`,
      java: `class Solution {
    public static int reverseBits(int n) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(Integer.toUnsignedLong(reverseBits(43261596))); // Expected: 964176192
        System.out.println(Integer.toUnsignedLong(reverseBits(-3))); // Expected: 3221225471
    }
}`,
    },
    expectedOutput: {
      javascript: "964176192\n3221225471",
      python: "964176192\n3221225471",
      java: "964176192\n3221225471",
    },
  },

  "implement-trie": {
    id: "implement-trie",
    title: "Implement Trie (Prefix Tree)",
    difficulty: "Medium",
    category: "Trie • Design • Hash Table",
    description: {
      text: "A trie (pronounced as 'try') or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. Implement the Trie class with insert, search, and startsWith methods.",
      notes: [
        "insert(word) — Inserts the string word into the trie.",
        "search(word) — Returns true if the string word is in the trie (inserted previously), and false otherwise.",
        "startsWith(prefix) — Returns true if there is a previously inserted string that has the prefix, and false otherwise.",
      ],
    },
    examples: [
      {
        input: '["Trie","insert","search","search","startsWith","insert","search"]\n[[],["apple"],["apple"],["app"],["app"],["app"],["app"]]',
        output: "[null,null,true,false,true,null,true]",
      },
    ],
    constraints: ["1 ≤ word.length, prefix.length ≤ 2000", "word and prefix consist only of lowercase English letters", "At most 3 * 10⁴ calls in total will be made to insert, search, and startsWith"],
    starterCode: {
      javascript: `class Trie {
  constructor() {
    // Write your solution here
  }
  
  insert(word) {
    // Write your solution here
  }
  
  search(word) {
    // Write your solution here
    
  }
  
  startsWith(prefix) {
    // Write your solution here
    
  }
}

// Test cases
const trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple")); // Expected: true
console.log(trie.search("app")); // Expected: false
console.log(trie.startsWith("app")); // Expected: true
trie.insert("app");
console.log(trie.search("app")); // Expected: true`,
      python: `class Trie:
    def __init__(self):
        # Write your solution here
        pass
    
    def insert(self, word):
        # Write your solution here
        pass
    
    def search(self, word):
        # Write your solution here
        pass
    
    def startsWith(self, prefix):
        # Write your solution here
        pass

# Test cases
trie = Trie()
trie.insert("apple")
print(trie.search("apple"))  # Expected: True
print(trie.search("app"))  # Expected: False
print(trie.startsWith("app"))  # Expected: True
trie.insert("app")
print(trie.search("app"))  # Expected: True`,
      java: `class Trie {
    // Write your solution here
    
    public Trie() {
        
    }
    
    public void insert(String word) {
        
    }
    
    public boolean search(String word) {
        return false;
    }
    
    public boolean startsWith(String prefix) {
        return false;
    }
    
    public static void main(String[] args) {
        Trie trie = new Trie();
        trie.insert("apple");
        System.out.println(trie.search("apple")); // Expected: true
        System.out.println(trie.search("app")); // Expected: false
        System.out.println(trie.startsWith("app")); // Expected: true
        trie.insert("app");
        System.out.println(trie.search("app")); // Expected: true
    }
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse\ntrue\ntrue",
      python: "True\nFalse\nTrue\nTrue",
      java: "true\nfalse\ntrue\ntrue",
    },
  },
  "house-robber": {
    id: "house-robber",
    title: "House Robber",
    difficulty: "Medium",
    category: "Dynamic Programming",
    description: {
      text: "You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. The only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night. Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.",
      notes: [],
    },
    examples: [
      {
        input: "nums = [1,2,3,1]",
        output: "4",
        explanation: "Rob house 1 (money = 1) and then rob house 3 (money = 3). Total amount = 1 + 3 = 4.",
      },
      {
        input: "nums = [2,7,9,3,1]",
        output: "12",
        explanation: "Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1). Total amount = 2 + 9 + 1 = 12.",
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 100", "0 ≤ nums[i] ≤ 400"],
    starterCode: {
      javascript: `function rob(nums) {
  // Write your solution here
  
}

// Test cases
console.log(rob([1,2,3,1])); // Expected: 4
console.log(rob([2,7,9,3,1])); // Expected: 12
console.log(rob([2,1])); // Expected: 2`,
      python: `def rob(nums):
    # Write your solution here
    pass

# Test cases
print(rob([1,2,3,1]))  # Expected: 4
print(rob([2,7,9,3,1]))  # Expected: 12
print(rob([2,1]))  # Expected: 2`,
      java: `class Solution {
    public static int rob(int[] nums) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(rob(new int[]{1,2,3,1})); // Expected: 4
        System.out.println(rob(new int[]{2,7,9,3,1})); // Expected: 12
        System.out.println(rob(new int[]{2,1})); // Expected: 2
    }
}`,
    },
    expectedOutput: {
      javascript: "4\n12\n2",
      python: "4\n12\n2",
      java: "4\n12\n2",
    },
  },

  "longest-common-subsequence": {
    id: "longest-common-subsequence",
    title: "Longest Common Subsequence",
    difficulty: "Medium",
    category: "String • Dynamic Programming",
    description: {
      text: "Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0. A subsequence is a new string generated from the original string with some characters deleted (can be none) without changing the relative order of the remaining characters.",
      notes: [],
    },
    examples: [
      {
        input: 'text1 = "abcde", text2 = "ace"',
        output: "3",
        explanation: 'The longest common subsequence is "ace" and its length is 3.',
      },
      {
        input: 'text1 = "abc", text2 = "abc"',
        output: "3",
        explanation: 'The longest common subsequence is "abc" and its length is 3.',
      },
      {
        input: 'text1 = "abc", text2 = "def"',
        output: "0",
        explanation: "There is no such common subsequence, so the result is 0.",
      },
    ],
    constraints: ["1 ≤ text1.length, text2.length ≤ 1000", "text1 and text2 consist of only lowercase English letters"],
    starterCode: {
      javascript: `function longestCommonSubsequence(text1, text2) {
  // Write your solution here
  
}

// Test cases
console.log(longestCommonSubsequence("abcde", "ace")); // Expected: 3
console.log(longestCommonSubsequence("abc", "abc")); // Expected: 3
console.log(longestCommonSubsequence("abc", "def")); // Expected: 0`,
      python: `def longestCommonSubsequence(text1, text2):
    # Write your solution here
    pass

# Test cases
print(longestCommonSubsequence("abcde", "ace"))  # Expected: 3
print(longestCommonSubsequence("abc", "abc"))  # Expected: 3
print(longestCommonSubsequence("abc", "def"))  # Expected: 0`,
      java: `class Solution {
    public static int longestCommonSubsequence(String text1, String text2) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(longestCommonSubsequence("abcde", "ace")); // Expected: 3
        System.out.println(longestCommonSubsequence("abc", "abc")); // Expected: 3
        System.out.println(longestCommonSubsequence("abc", "def")); // Expected: 0
    }
}`,
    },
    expectedOutput: {
      javascript: "3\n3\n0",
      python: "3\n3\n0",
      java: "3\n3\n0",
    },
  },

  "pacific-atlantic-water-flow": {
    id: "pacific-atlantic-water-flow",
    title: "Pacific Atlantic Water Flow",
    difficulty: "Medium",
    category: "Graph • DFS • BFS • Matrix",
    description: {
      text: "There is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean. The Pacific Ocean touches the island's left and top edges, and the Atlantic Ocean touches the island's right and bottom edges. Water can only flow in four directions (up, down, left, right) from a cell to an adjacent one with height equal or less. Return a list of grid coordinates where water can flow to both the Pacific and Atlantic oceans.",
      notes: [],
    },
    examples: [
      {
        input: "heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]",
        output: "[[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]",
      },
      {
        input: "heights = [[1]]",
        output: "[[0,0]]",
      },
    ],
    constraints: ["m == heights.length", "n == heights[r].length", "1 ≤ m, n ≤ 200", "0 ≤ heights[r][c] ≤ 10⁵"],
    starterCode: {
      javascript: `function pacificAtlantic(heights) {
  // Write your solution here
  
}

// Test cases
console.log(JSON.stringify(pacificAtlantic([[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]))); // [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]
console.log(JSON.stringify(pacificAtlantic([[1]]))); // [[0,0]]`,
      python: `def pacificAtlantic(heights):
    # Write your solution here
    pass

# Test cases
print(pacificAtlantic([[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]))  # [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]
print(pacificAtlantic([[1]]))  # [[0,0]]`,
      java: `import java.util.*;

class Solution {
    public static List<List<Integer>> pacificAtlantic(int[][] heights) {
        // Write your solution here
        
        return new ArrayList<>();
    }
    
    public static void main(String[] args) {
        System.out.println(pacificAtlantic(new int[][]{{1,2,2,3,5},{3,2,3,4,4},{2,4,5,3,1},{6,7,1,4,5},{5,1,1,2,4}}));
        // Expected: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]
        System.out.println(pacificAtlantic(new int[][]{{1}})); // Expected: [[0,0]]
    }
}`,
    },
    expectedOutput: {
      javascript: "[[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]\n[[0,0]]",
      python: "[[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]]\n[[0, 0]]",
      java: "[[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]]\n[[0, 0]]",
    },
  },

  "longest-substring-without-repeating": {
    id: "longest-substring-without-repeating",
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    category: "String • Sliding Window • Hash Table",
    description: {
      text: "Given a string s, find the length of the longest substring without repeating characters.",
      notes: [],
    },
    examples: [
      {
        input: 's = "abcabcbb"',
        output: "3",
        explanation: 'The answer is "abc", with the length of 3.',
      },
      {
        input: 's = "bbbbb"',
        output: "1",
        explanation: 'The answer is "b", with the length of 1.',
      },
      {
        input: 's = "pwwkew"',
        output: "3",
        explanation: 'The answer is "wke", with the length of 3.',
      },
    ],
    constraints: ["0 ≤ s.length ≤ 5 * 10⁴", "s consists of English letters, digits, symbols and spaces"],
    starterCode: {
      javascript: `function lengthOfLongestSubstring(s) {
  // Write your solution here
  
}

// Test cases
console.log(lengthOfLongestSubstring("abcabcbb")); // Expected: 3
console.log(lengthOfLongestSubstring("bbbbb")); // Expected: 1
console.log(lengthOfLongestSubstring("pwwkew")); // Expected: 3`,
      python: `def lengthOfLongestSubstring(s):
    # Write your solution here
    pass

# Test cases
print(lengthOfLongestSubstring("abcabcbb"))  # Expected: 3
print(lengthOfLongestSubstring("bbbbb"))  # Expected: 1
print(lengthOfLongestSubstring("pwwkew"))  # Expected: 3`,
      java: `class Solution {
    public static int lengthOfLongestSubstring(String s) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(lengthOfLongestSubstring("abcabcbb")); // Expected: 3
        System.out.println(lengthOfLongestSubstring("bbbbb")); // Expected: 1
        System.out.println(lengthOfLongestSubstring("pwwkew")); // Expected: 3
    }
}`,
    },
    expectedOutput: {
      javascript: "3\n1\n3",
      python: "3\n1\n3",
      java: "3\n1\n3",
    },
  },

  "combination-sum": {
    id: "combination-sum",
    title: "Combination Sum",
    difficulty: "Medium",
    category: "Array • Backtracking",
    description: {
      text: "Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order. The same number may be chosen from candidates an unlimited number of times.",
      notes: ["Two combinations are unique if the frequency of at least one of the chosen numbers is different."],
    },
    examples: [
      {
        input: "candidates = [2,3,6,7], target = 7",
        output: "[[2,2,3],[7]]",
        explanation: "2 and 3 are candidates, and 2+2+3=7. 7 is a candidate, and 7=7. These are the only two combinations.",
      },
      {
        input: "candidates = [2,3,5], target = 8",
        output: "[[2,2,2,2],[2,3,3],[3,5]]",
      },
      {
        input: "candidates = [2], target = 1",
        output: "[]",
      },
    ],
    constraints: ["1 ≤ candidates.length ≤ 30", "2 ≤ candidates[i] ≤ 40", "All elements of candidates are distinct", "1 ≤ target ≤ 40"],
    starterCode: {
      javascript: `function combinationSum(candidates, target) {
  // Write your solution here
  
}

// Test cases
console.log(JSON.stringify(combinationSum([2,3,6,7], 7))); // Expected: [[2,2,3],[7]]
console.log(JSON.stringify(combinationSum([2,3,5], 8))); // Expected: [[2,2,2,2],[2,3,3],[3,5]]
console.log(JSON.stringify(combinationSum([2], 1))); // Expected: []`,
      python: `def combinationSum(candidates, target):
    # Write your solution here
    pass

# Test cases
print(combinationSum([2,3,6,7], 7))  # Expected: [[2,2,3],[7]]
print(combinationSum([2,3,5], 8))  # Expected: [[2,2,2,2],[2,3,3],[3,5]]
print(combinationSum([2], 1))  # Expected: []`,
      java: `import java.util.*;

class Solution {
    public static List<List<Integer>> combinationSum(int[] candidates, int target) {
        // Write your solution here
        
        return new ArrayList<>();
    }
    
    public static void main(String[] args) {
        System.out.println(combinationSum(new int[]{2,3,6,7}, 7)); // Expected: [[2,2,3],[7]]
        System.out.println(combinationSum(new int[]{2,3,5}, 8)); // Expected: [[2,2,2,2],[2,3,3],[3,5]]
        System.out.println(combinationSum(new int[]{2}, 1)); // Expected: []
    }
}`,
    },
    expectedOutput: {
      javascript: "[[2,2,3],[7]]\n[[2,2,2,2],[2,3,3],[3,5]]\n[]",
      python: "[[2, 2, 3], [7]]\n[[2, 2, 2, 2], [2, 3, 3], [3, 5]]\n[]",
      java: "[[2, 2, 3], [7]]\n[[2, 2, 2, 2], [2, 3, 3], [3, 5]]\n[]",
    },
  },
};

export const LANGUAGE_CONFIG = {
  javascript: {
    name: "JavaScript",
    icon: "/javascript.png",
    monacoLang: "javascript",
  },
  python: {
    name: "Python",
    icon: "/python.png",
    monacoLang: "python",
  },
  java: {
    name: "Java",
    icon: "/java.png",
    monacoLang: "java",
  },
};