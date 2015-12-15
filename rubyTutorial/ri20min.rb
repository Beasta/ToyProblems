## tutorial from https://www.ruby-lang.org/en/documentation/quickstart/
#!/usr/bin/env ruby

class MegaGreeter
  attr_accessor :names

  # Create the object
  def initialize(name = "World")
    @names = names
  end

  #say hi to everybody