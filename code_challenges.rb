# ASSESSMENT 4: Ruby Coding Practical Questions

# --------------------1) Create a method that takes in an array and returns an array with only odd numbers sorted from least to greatest.
fullArr1 = [4, 9, 0, '7', 8, true, 'hey', 7, 199, -9, false, 'hola']
# Expected output: [-9, 7, 9, 199]
fullArr2 = ['hello', 7, 23, -823, false, 78, nil, '67', 6, 'Number']
# Expected output: [-823, 7, 23]
def odd_num(arr)
    sorted_arr = []
    arr.filter do |value|
        if value.is_a? Integer
        sorted_arr << value 
        end
    end
        arr = []
        sorted_arr.filter do |value|
            if value % 2 == 1
            arr << value 
            end
        end
    arr.sort
end
print odd_num(fullArr1)
puts ""
print odd_num(fullArr2)
puts ""



# --------------------2) Create a class called Bike that is initialized with a model, wheels, and a frame size. The default number of wheels is 2. Create a get_info method that returns a sentence with all the data from the bike object.
class Bike 
    def initialize
        @model = "Trek"
        @wheels = 2
        @frame_size = "168cm"
        @speed = 0
    end
    
    def get_info
        puts "The #@model bike has #@wheels wheels and a #@frame_size frame. "
    end
    
    def bell
        puts "Beep beep!"
    end
    
    def speedometer
        @speed 
    end
    
    def pedal_faster(num)
        @speed += num
    end
    
    def brake(num)
        @speed -= num
        if @speed <= 0
            @speed = 0
        end
    end
end

new_bike = Bike.new
new_bike.get_info




# Expected output example: 'The Trek bike has 2 wheels and a 168cm frame.'


# -------------------3) Add a bell to the bike class and create a method that will ring the bell when the method is called.
new_bike.bell




# Expected output example: my_bike.ring_bell => 'Beep beep!'


# -------------------4) Add a speedometer to the Bike class. The speed should be initialized at 0.

puts new_bike.speedometer



# Expected output example: my_bike.speed => 0


# -------------------5) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed. The brake method should decrease the speed. The bike cannot go negative speeds.

puts new_bike.speedometer
new_bike.pedal_faster 10
puts new_bike.speedometer
new_bike.pedal_faster 15
puts new_bike.speedometer
new_bike.brake 25
puts new_bike.speedometer



# Expected output example: my_bike.pedal_faster 10 => 10
# Expected output example: my_bike.brake 15 => 0
