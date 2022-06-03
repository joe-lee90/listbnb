# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#

puts "🗑 Clearing database"

Review.destroy_all
Listing.destroy_all
User.destroy_all

puts "✅ Done cleaning!"

puts "🌱 Seeding database"

# User :name, :image
# Listing :name, :image, :address, :price, :description
# Review :description, :user_id, :listing_id

joe = User.create(username: "zamboni", password_digest: BCrypt::Password.create("letmein"), name: "Joe", image: "https://ca.slack-edge.com/T02MD9XTF-U02VBJHA88P-0e543c671b27-512")
chandy = User.create(username: "chandizzy123", password_digest: BCrypt::Password.create("hunter2"), name: "Chandy", image: "https://ca.slack-edge.com/T02MD9XTF-U029YAX6A9J-418e7f433ad5-512")
nick = User.create(username: "harper", password_digest: BCrypt::Password.create("asdfasdf"), name: "Nick", image: "https://ca.slack-edge.com/T02MD9XTF-U0323QXV9JB-8c0a4338d666-512")
phil = User.create(username: "rothberry", password_digest: BCrypt::Password.create("beets"), name: "Phil", image: "https://ca.slack-edge.com/T02MD9XTF-U01FB6HNSMN-d1127ec62276-512")

l1 = Listing.create(name: "Black & White", 
                    image: "http://cdn.home-designing.com/wp-content/uploads/2017/05/overlapping-coloured-block-modern-house-exterior-design-ideas.jpg", 
                    address: "2, Partizansky Avenue, Minsk, 220070, Belarus",
                    price: 399,
                    description: "Think black and white won’t sit well together? Think again in this Jenga-style structure that holds a black box on the top, and a white one underneath. Paths of pebbles draw the guest in.")

l2 = Listing.create(name: "Lakehouse", 
                    image: "http://cdn.home-designing.com/wp-content/uploads/2017/05/lake-and-forest-setting-modern-front-elevation-design.jpg", 
                    address: "2574 W Lake Sammamish Pky NE, Redmond, WA, 98052",
                    price: 480,
                    description: "Zip away in your jet boat from the moment you wake. This contemporary abode uses concrete, slatted wood and glass to create a cascade of layers that stretch over a lake.")

l3 = Listing.create(name: "Colonial", 
                    image: "https://cdn.onekindesign.com/wp-content/uploads/2019/10/Traditional-Style-Home-Nor-Son-Custom-Builders-01-1-Kindesign.jpg", 
                    address: "2623 Logan Ave N, Minneapolis, MN, 55411",
                    price: 220,
                    description: "A family estate built with love, this home features an open and spacious floor plan and ten-foot high ceilings. Ideally located just off the family room is a cozy and inviting screened-in porch with a fireplace. A vaulted wood ceiling and motorized phantom screens opens out to an expansive stone patio with exceptional views of the prairie-like setting.")

l4 = Listing.create(name: "Villa", 
                    image: "https://pix10.agoda.net/hotelImages/290/290666/290666_14021507590018349604.jpg?ca=2&ce=1&s=1024x768", 
                    address: "Jalan Pegending, Br. Tuka, Gg. Palam Raja , Canggu, Bali, Indonesia, 80361",
                    price: 549,
                    description: "Welcome to Bali! Enjoy your beautiful and relaxing stay in our premium villa. Don't forget to visit the Sacred Monkey Forest Sanctuary before you leave!")
                    
r1 = Review.create(user_id: joe.id, listing_id: l2.id, description: "Very calm and serene location with beautiful views and trails. Stayed here for an extended weekend and looking forward to doing so again!")
r2 = Review.create(user_id: joe.id, listing_id: l1.id, description: "Cool building, but can be a little cramped and impractical for long-term stay.")
r3 = Review.create(user_id: chandy.id, listing_id: l4.id, description: "Beautiful, beautiful, beautiful!! Thank you for making my vacation so wonderful!")
r4 = Review.create(user_id: nick.id, listing_id: l3.id, description: "Cozy house with a nice yard.")
r5 = Review.create(user_id: phil.id, listing_id: l1.id, description: "Super dope.")
r6 = Review.create(user_id: phil.id, listing_id: l2.id, description: "Cool cool cool.")
r7 = Review.create(user_id: phil.id, listing_id: l4.id, description: "Great place for a rave")
r8 = Review.create(user_id: nick.id, listing_id: l1.id, description: "WOW! Just wow.")
r9 = Review.create(user_id: chandy.id, listing_id: l3.id, description: "This place is even better than the pictures!")




                    
puts "✅ Done seeding!"


# Minas Tirith
# Gondor
# https://c4.wallpaperflare.com/wallpaper/241/251/757/the-lord-of-the-rings-gandalf-minas-tirith-movies-wallpaper-preview.jpg
# 350
# For Frodo