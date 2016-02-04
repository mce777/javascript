class Person
  attr_reader :age, :name

  def initialize(name, age)
    @name = name
    @age = age
  end

end

ken = Person.new("Ken", 28)
marco = Person.new("Marco", 29)
erica = Person.new("Erica", 30)
cindy = Person.new("Cindy", 31)

people = [ken, marco, erica, cindy]

def sort_people(people, comparer)
  people.sort do |x, y|
    comparer.call(x) <=> comparer.call(y)
  end
end

# grab_age = lambda do |person|
#   person.age
# end

sorted_people = sort_people(people, lambda {|person| person.age})

puts sorted_people.inspect
