module.exports = {
    mongo: {
        url: process.env.MONGO_URL || "mongodb+srv://sidneytebbal:Woodyvice1@cluster0.uowriea.mongodb.net/?retryWrites=true&w=majority"
    },
    discord: {
        webhook: process.env.DISCORD_WEBHOOK || "https://discord.com/api/webhooks/1107388751136706670/qBOLJhOHxmenHoGTgpytqJPxCA54OUPW6ntninwvBMiBHl0a2ER-b2ETqykSbGQEws_p"
    },
    grailed: {
        params: process.env.GRAILED_PARAMS || "filters=(strata:grailed%20OR%20strata:hype%20OR%20strata:basic%20OR%20strata:sartorial)%20AND%20(category_path_size:footwear.lowtop_sneakers.10%20OR%20category_path_size:footwear.lowtop_sneakers.10.5%20OR%20category_path_size:footwear.lowtop_sneakers.11%20OR%20category_path_size:footwear.hitop_sneakers.10%20OR%20category_path_size:footwear.hitop_sneakers.10.5%20OR%20category_path_size:footwear.hitop_sneakers.11%20OR%20category_path_size:footwear.boots.10%20OR%20category_path_size:footwear.boots.10.5%20OR%20category_path_size:footwear.boots.11%20OR%20category_path_size:footwear.leather.10%20OR%20category_path_size:footwear.leather.10.5%20OR%20category_path_size:footwear.leather.11%20OR%20category_path_size:footwear.sandals.10%20OR%20category_path_size:footwear.sandals.10.5%20OR%20category_path_size:footwear.sandals.11%20OR%20category_path_size:footwear.slip_ons.10%20OR%20category_path_size:footwear.slip_ons.10.5%20OR%20category_path_size:footwear.slip_ons.11%20OR%20category_path_size:footwear.formal_shoes.10%20OR%20category_path_size:footwear.formal_shoes.10.5%20OR%20category_path_size:footwear.formal_shoes.11)%20AND%20price_i%3E%3D0%20AND%20(marketplace:%20grailed)&hitsPerPage=100&page=0&query=off%20white"
    }
}