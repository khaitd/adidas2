# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.create(username:"user1" , email:"user1@geemail.com" )


Order.create(total_price: 199 , user_id: 1, complete: false, sneaker_id: 2)


Sneaker.create(name: "NMD_V3 Shoe", price: 1, size: "9", category: "men", color: "black", img: "https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/e7c81332d01444b3b443adee014645bb_9366/nmd_v3-shoes.jpg", top_img: "https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/2616d6bb7578495395cfadee0146ad85_9366/nmd_v3-shoes.jpg")
Sneaker.create(name: "NMD_R1 PRIMEBLUE ", price: 1, size: "9", category: "men", color: "black", img: "https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/f39b99c10ebb4257aad9ad1e00dd3afd_9366/nmd_r1-primeblue-shoes.jpg", order_id: 1, top_img: "https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/a8dd72b84eb74a86a460ad1e00dd0db5_9366/nmd_r1-primeblue-shoes.jpg")
Sneaker.create(name: "Ultraboost 22", price: 1, size: "9", category: "men", color: "black", img: "https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/e69d0e0c30054c0ebda2ae04012660a8_9366/ultraboost-22-shoes.jpg", order_id: 1, top_img: "https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/5d43ecf8f8c54a99b6dcae0400f69355_9366/ultraboost-22-shoes.jpg" )
Sneaker.create(name: "adidas 4D", price: 1, size: "9", category: "men", color: "black", img: "https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/e935fb0704354b36a575ad650105cb26_9366/adidas-4d-shoes.jpg", order_id: 1, top_img: "https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/43174f74ad67453e98e2ae450114f82f_9366/adidas-4d-shoes.jpg" )

Sneaker.create(name: "Ultraboost 4.0 DNA", price: 1, size: "9", category: "men", color: "black", img: "https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/4c39617b3c4a4ed69e2cac5500995208_9366/ultraboost-4.0-dna-shoes.jpg", order_id: 1, top_img: "https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/4df6a4c2c1a6459eb8a1ac5500915c8e_9366/ultraboost-4.0-dna-shoes.jpg" )
Sneaker.create(name: "Ultraboost 5.0 DNA Pride", price: 1, size: "9", category: "men", color: "black", img: "https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/1631c4dcd7bc4206ad12ae0c0152c941_9366/ultraboost-5.0-dna-pride-shoes.jpg", order_id: 1, top_img: "https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/bc15ea8657db413fa2afade30000a8eb_9366/ultraboost-5.0-dna-shoes.jpg" )
Sneaker.create(name: "Adizero Prime X", price: 1, size: "9", category: "men", color: "black", img: "https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/4aea5193ebe840478569ad7400de0e23_9366/adizero-prime-x-shoes.jpg", order_id: 1, top_img: "https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/f391e5ed906d476b87cead7400b4fcd1_9366/adizero-prime-x-shoes.jpg" )
Sneaker.create(name: "4D Fusio", price: 1, size: "9", category: "men", color: "black", img: "https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/ade458f8e69e4c06b0f2ac720125f57e_9366/4d-fusio-shoes.jpg", order_id: 1, top_img: "https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/b01762ea1d234927b860ac7200d460df_9366/4d-fusio-shoes.jpg" )
