import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";
import { Link } from "react-router-dom";
import Authuser from "../Authetication/Authuser";

const Home = () => {
  const { http } = Authuser();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Show 5 slides in one row
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const slidesData = [
    {
      img: "https://cdn.britannica.com/94/151894-050-F72A5317/Brown-eggs.jpg",
      title: "Egg",
      //   description: "Description for Product 1",
    },
    {
      img: "https://cdn4.volusion.store/etwvu-tkhop/v/vspfiles/photos/420-2.jpg",
      title: "Chinken Wing",
    },
    {
      img: "https://i0.wp.com/www.thegoodeatsdiner.com/wp-content/uploads/2020/08/28_chicken_wings_jumbo.jpg?fit=1000%2C736&ssl=1",
      title: "Boneless Chinken",
    },
    {
      img: "https://fryit.co/wp-content/uploads/2023/04/thawed-chicken-wings_01-mcw.jpg",
      title: "Chinken Curry",
    },
    {
      img: "https://www.inspiredtaste.net/wp-content/uploads/2023/08/Simple-Whole-Roasted-Recipe-Video.jpg",
      title: "Chinken",
      //   description: "Description for Product 5",
    },
    {
      img: "https://akm-img-a-in.tosshub.com/indiatoday/fish-story-647_120617055032.jpg?VersionId=8lgq8R3m73XTGRESTwi9DtI8HKHhsF6K",
      title: "Fish",
      //   description: "Description for Product 6",
    },
    {
      img: "https://media.licdn.com/dms/image/C5612AQHR3R8uD3j21Q/article-cover_image-shrink_600_2000/0/1597008473365?e=2147483647&v=beta&t=AEBARVD2jgRvtbEz_6c1YTxGWLkuR193E3U-BPlsXCo",
      title: "Mutton",
      //   description: "Description for Product 7",
    },
  ];

  const [shop, setShop] = useState([]);

  useEffect(() => {
    http
      .get("http://localhost:5001/api/shops")
      .then((response) => {
        const data = response.data.data; // Access the array inside `data`
        if (Array.isArray(data)) {
          setShop(data);
          console.log(data);
        } else {
          console.error("Unexpected response format:", response.data);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // const shopsData = [
  //   {
  //     img: "https://img.freepik.com/premium-vector/colorful-fried-chicken-shop-cartoon-vector-design_1080480-126900.jpg?semt=ais_hybrid",
  //     name: "Balaji Chicken",
  //     rating: 4.7,
  //     address: "Balaji park, mhada colony, Kolhapur, Maharashtra",
  //     pincode: "ZB53S7H",
  //     availability: { serviceAvailable: true, serviceNotAvailable: false },
  //     reviews: 31,
  //   },
  //   {
  //     img: "https://img.freepik.com/premium-vector/colorful-fried-chicken-shop-cartoon-vector-design_1080480-126900.jpg?semt=ais_hybrid",
  //     name: "Balaji Chicken",
  //     rating: 4.7,
  //     address: "Balaji park, mhada colony, Kolhapur, Maharashtra",
  //     pincode: "ZB53S7H",
  //     availability: { serviceAvailable: true, serviceNotAvailable: false },
  //     reviews: 31,
  //   },
  //   {
  //     img: "https://img.freepik.com/premium-vector/colorful-fried-chicken-shop-cartoon-vector-design_1080480-126900.jpg?semt=ais_hybrid",
  //     name: "Balaji Chicken",
  //     rating: 4.7,
  //     address: "Balaji park, mhada colony, Kolhapur, Maharashtra",
  //     pincode: "ZB53S7H",
  //     availability: { serviceAvailable: true, serviceNotAvailable: false },
  //     reviews: 31,
  //   },
  //   {
  //     img: "https://img.freepik.com/premium-vector/colorful-fried-chicken-shop-cartoon-vector-design_1080480-126900.jpg?semt=ais_hybrid",
  //     name: "Balaji Chicken",
  //     rating: 4.7,
  //     address: "Balaji park, mhada colony, Kolhapur, Maharashtra",
  //     pincode: "ZB53S7H",
  //     availability: { serviceAvailable: true, serviceNotAvailable: false },
  //     reviews: 31,
  //   },
  //   {
  //     img: "https://img.freepik.com/premium-vector/colorful-fried-chicken-shop-cartoon-vector-design_1080480-126900.jpg?semt=ais_hybrid",
  //     name: "Balaji Chicken",
  //     rating: 4.7,
  //     address: "Balaji park, mhada colony, Kolhapur, Maharashtra",
  //     pincode: "ZB53S7H",
  //     availability: { serviceAvailable: true, serviceNotAvailable: false },
  //     reviews: 31,
  //   },
  //   {
  //     img: "https://img.freepik.com/premium-vector/colorful-fried-chicken-shop-cartoon-vector-design_1080480-126900.jpg?semt=ais_hybrid",
  //     name: "Balaji Chicken",
  //     rating: 4.7,
  //     address: "Balaji park, mhada colony, Kolhapur, Maharashtra",
  //     pincode: "ZB53S7H",
  //     availability: { serviceAvailable: true, serviceNotAvailable: false },
  //     reviews: 31,
  //   },
  //   {
  //     img: "https://img.freepik.com/premium-vector/colorful-fried-chicken-shop-cartoon-vector-design_1080480-126900.jpg?semt=ais_hybrid",
  //     name: "Balaji Chicken",
  //     rating: 4.7,
  //     address: "Balaji park, mhada colony, Kolhapur, Maharashtra",
  //     pincode: "ZB53S7H",
  //     availability: { serviceAvailable: true, serviceNotAvailable: false },
  //     reviews: 31,
  //   },
  //   {
  //     img: "https://img.freepik.com/premium-vector/colorful-fried-chicken-shop-cartoon-vector-design_1080480-126900.jpg?semt=ais_hybrid",
  //     name: "Balaji Chicken",
  //     rating: 4.7,
  //     address: "Balaji park, mhada colony, Kolhapur, Maharashtra",
  //     pincode: "ZB53S7H",
  //     availability: { serviceAvailable: true, serviceNotAvailable: false },
  //     reviews: 31,
  //   },
  //   // Add other shops if necessary
  // ];
  return (
    <div className="page-content">
      <div className="container mt-5">
        <h2
          className=""
          style={{
            color: "#9A292F",
            fontWeight: "bold",
            fontSize: "30px",
            fontStyle: "italic",
            textAlign:"center"
          }}
        >
          Order Fresh Chicken & Egg Online In Your City
        </h2>
        <Slider {...settings}>
          {slidesData.map((slide, index) => (
            <div key={index} className="slide-item text-center">
              <img
                src={slide.img}
                alt={slide.title}
                className="circular-image"
              />
              <h5 className="mt-3">{slide.title}</h5>
              <p>{slide.description}</p>
            </div>
          ))}
        </Slider>
      </div>
      <div className="container mt-5">
        <Link to="/dash" className="no-underline">
          <h2
            className="text-center"
            style={{
              color: "#9A292F",
              fontWeight: "bold",
              fontSize: "30px",
              fontStyle: "italic",
            }}
          >
            Shops To Explore
          </h2>
        </Link>
        <div className="row">
          {Array.isArray(shop) && shop.length > 0 ? (
            shop.map((item, index) => (
              <div
                className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
                key={index}
              >
                <Link to={`/shop/${item.id}`}>
                  <div className="card shop-card shadow position-relative" style={{height:"380px",borderColor:"#9a292f"}}>
                    <img
                      src={`http://localhost:5001/uploads/shop/${item.shopImage}`}
                      alt={item.shopName}
                      className="card-img-top"
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "300px", // Adjust height for mobile view
                        // objectFit:"contain"
                      }}
                    />
                    <div className="card-body text-center">
                      <h5 className="card-title">{item.shopName}</h5>
                      <div className="rating">
                        {Array.from({ length: 5 }, (_, i) => (
                          <i
                            key={i}
                            className={`fas fa-star ${
                              i < item.rating ? "text-gold" : "text-secondary"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <p>No shops available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
