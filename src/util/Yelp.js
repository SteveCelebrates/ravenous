const apiKey = 'Z94XE_4G_WjgD2w0h9a3jNZOA6s1K5zQxj_fIwxOWCDOUHjGX2u3SAOSgGf23i2SQg1ye9EZ77K8fwVesCdEetAHfqEcOdFXNIO1aOX3b2l-tA5IZYkp8kNtjL3TY3Yx';

const Yelp = {
    async search(term, location, sortBy) {
        return fetch(
            `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }
        ).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => ({
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count
                }));
            }
        });
    }
};

export default Yelp;