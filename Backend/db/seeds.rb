# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Lesson.create(planet: "mercury")
Question.create(
    title: "Mercury's enormous core represents 85% of the planet's radius, and is made of ____",
    "option1" => "Mercury",
    "option2" => "Iron",
    "option3" => "Titanium",
    "option4" => "Lead",
    answer: "Iron",
    lesson_id: 1
)
Question.create(
    title: "During the day, Mercury's surface temperature can reach ____ degrees Farenheit",
    "option1" => "100",
    "option2" => "30",
    "option3" => "550",
    "option4" => "800",
    answer: "800",
    lesson_id: 1
)
Question.create(
    title: "At night, Mercury's surface temperature can can drop as low as ____ degrees Farenheit",
    "option1" => "-10",
    "option2" => "-290",
    "option3" => "-150",
    "option4" => "-400",
    answer: "-290",
    lesson_id: 1
)

Lesson.create(planet: "venus")
Question.create(
    title: "From Earth, Venus is the second brightest object in the night sky after ____",
    "option1" => "Mars",
    "option2" => "The Big Dipper",
    "option3" => "The Moon",
    "option4" => "The International Space Station",
    answer: "The Moon",
    lesson_id: 2
)
Question.create(
    title: "Venus is named after the Roman god of  ____",
    "option1" => "Love and Beauty",
    "option2" => "War",
    "option3" => "The Sky",
    "option4" => "Time",
    answer: "Love and Beauty",
    lesson_id: 2
)
Question.create(
    title: "Venus rotates in the opposite direction to most other planets. This rotation is reffered to as ____",
    "option1" => "Retrograde",
    "option2" => "Retrospin",
    "option3" => "Antispin",
    "option4" => "Rewind",
    answer: "Retrograde",
    lesson_id: 2
)

Lesson.create(planet: "earth")
Question.create(
    title: "'Earth' is a Germanic word that means ____",
    "option1" => "Water",
    "option2" => "Third",
    "option3" => "Ground",
    "option4" => "Life",
    answer: "Ground",
    lesson_id: 3
)
Question.create(
    title: "Earth is the ____ planet in the solar system",
    "option1" => "Lightest",
    "option2" => "Densest",
    "option3" => "Smallest",
    "option4" => "Oldest",
    answer: "Densest",
    lesson_id: 3
)
Question.create(
    title: "Only about ____ % of Earth's water is fresh",
    "option1" => "10",
    "option2" => "30",
    "option3" => "3",
    "option4" => "1",
    answer: "3",
    lesson_id: 3
)

Lesson.create(planet: "mars")
Question.create(
    title: "A year on Mars is almost ____ as long as a year on Earth",
    "option1" => "Twice",
    "option2" => "Exactly",
    "option3" => "Half",
    "option4" => "A Third",
    answer: "Twice",
    lesson_id: 4
)
Question.create(
    title: "Mars is home to the ____ in the solar system",
    "option1" => "Oldest Alien",
    "option2" => "Largest Moon",
    "option3" => "Smallest Lake",
    "option4" => "Tallest Mountain",
    answer: "Tallest Mountain",
    lesson_id: 4
)
Question.create(
    title: "Mars is the only other planet besides Earth that has ____",
    "option1" => "Polar Ice Caps",
    "option2" => "Animals",
    "option3" => "Moons",
    "option4" => "Seasons",
    answer: "Polar Ice Caps",
    lesson_id: 4
)

Lesson.create(planet: "jupiter")
Question.create(
    title: "Jupiter is 2.5 times more massive than ____",
    "option1" => "Earth",
    "option2" => "Venus",
    "option3" => "Neptune",
    "option4" => "All the other planets combined",
    answer: "All the other planets combined",
    lesson_id: 5
)
Question.create(
    title: "Jupiter has the lagest ocean in the solar system, made of liquid ____",
    "option1" => "Water",
    "option2" => "Hydrogen",
    "option3" => "Helium",
    "option4" => "Oxygen",
    answer: "Hydrogen",
    lesson_id: 5
)
Question.create(
    title: "Despite it's size, Jupiter has the shortest day in the solar system, completing a rotation in ____ hours",
    "option1" => "15",
    "option2" => "14",
    "option3" => "12",
    "option4" => "10",
    answer: "10",
    lesson_id: 5
)

Lesson.create(planet: "saturn")
Question.create(
    title: "Although it is its most distinct feature, Saturn isn't the only planet with ____",
    "option1" => "Water",
    "option2" => "Clouds",
    "option3" => "Rings",
    "option4" => "Moons",
    answer: "Rings",
    lesson_id: 6
)
Question.create(
    title: "Saturn has 53 confirmed ____",
    "option1" => "Rings",
    "option2" => "Moons",
    "option3" => "Aliens",
    "option4" => "Oceans",
    answer: "Moons",
    lesson_id: 6
)
Question.create(
    title: "Saturn takes roughly ____ Earth years to orbit the sun",
    "option1" => "10",
    "option2" => "14",
    "option3" => "29",
    "option4" => "3",
    answer: "29",
    lesson_id: 6
)

Lesson.create(planet: "uranus")
Question.create(
    title: "Uranus has a unique rotation, ratating ____",
    "option1" => "Quickly",
    "option2" => "On its Side",
    "option3" => "Slowly",
    "option4" => "It does not rotate",
    answer: "On its Side",
    lesson_id: 7
)
Question.create(
    title: "Uranus was the first planet discovered using ____",
    "option1" => "A Telescope",
    "option2" => "Binoculars",
    "option3" => "A Spaceship",
    "option4" => "A Satelite",
    answer: "A Telescope",
    lesson_id: 7
)
Question.create(
    title: "Uranus sees the lowest ____ of any planet",
    "option1" => "Pressure",
    "option2" => "Gravity",
    "option3" => "Temperature",
    "option4" => "Speed",
    answer: "Temperature",
    lesson_id: 7
)

Lesson.create(planet: "neptune")
Question.create(
    title: "Neptune's surface gravity is most similar to ____",
    "option1" => "Earth",
    "option2" => "Moon",
    "option3" => "Venus",
    "option4" => "Saturn",
    answer: "Earth",
    lesson_id: 8
)
Question.create(
    title: "Neptune has the strongest ____ in the solar system",
    "option1" => "Gravity",
    "option2" => "Winds",
    "option3" => "Currents",
    "option4" => "Rotation",
    answer: "Winds",
    lesson_id: 8
)
Question.create(
    title: "Neptune takes roughly ____ Earth years to orbit the Sun",
    "option1" => "30",
    "option2" => "75",
    "option3" => "50",
    "option4" => "165",
    answer: "165",
    lesson_id: 8
)