class Node
  attr_accessor :value, :left, :right

  def initialize(value, left = nil, right = nil)
    @value = value
    @left = left
    @right = right
  end
end

def find_target(root, target)
  return nil if root.nil?

  return root if root.value == target

  left_result = find_target(root.left, target)
  right_result = find_target(root.right, target)

  return left_result unless left_result.nil?
  return right_result unless right_result.nil?

  nil
end

if __FILE__ == $PROGRAM_NAME
  root = Node.new(1, Node.new(-1), Node.new(2))
  puts "Expecting: Node with value 2"
  puts find_target(root, 2).inspect

  puts

  puts "Expecting: nil"
  puts find_target(root, 5).inspect

  puts

  root2 = Node.new(4, Node.new(2, Node.new(1), Node.new(3)), Node.new(6, Node.new(5), Node.new(7)))

  puts "Expecting: Node with value 5"
  puts find_target(root2, 5).inspect

  puts

  puts "Expecting: Node with value 7"
  puts find_target(root2, 7).inspect

  puts

  puts "Expecting: nil"
  puts find_target(root2, 8).inspect
end

#{}W#ith the additional test cases, we create another binary tree root2 with the following structure:

     #{}   4
     #{}  / \
     #{} 2   6
    #{} / \ / \
   #{} 1  3 5  7
#{}We then call the find_target function on root2 with different target values:

#Searching for the target value 5. The expected output is the node with a value of 5.
#Searching for the target value 7. The expected output is the node with a value of 7.
#Searching for the target value 8. The expected output is nil, as the target value is not present in the tree.
#{}W#hen you run the code, it should print out the expected

  # Don't forget to add your own!

# Please add your pseudocode to this file
# And a written explanation of your solution
