# frozen_string_literal: true

User.find_or_create_by!(email: 'admin@pizzamagic.com') do |user|
  user.first_name = 'Ad'
  user.last_name = 'Min'
  user.password = 'password'
end

User.find_or_create_by!(email: 'one@customer.com') do |user|
  user.first_name = 'Customer'
  user.last_name = 'One'
  user.password = 'password'
end
