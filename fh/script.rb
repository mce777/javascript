add_numbers2 = lambda do |num1, num2|
  return num1 + num2
end

def combine(m, num1, num2)
  return m.call(num1, num2)
end

# notice, we're using a method as a variable
puts combine(add_numbers, 3, 4)
