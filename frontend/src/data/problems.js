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