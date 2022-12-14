import { useEffect, useState } from "react";
import { fetchImages } from "./api";
import { fetchBreeds } from "./breeds";
import Gallery from "./Gallery";
import Form from "./Form";

// const urls = [
//     "https://images.dog.ceo/breeds/shiba/shiba-11.jpg",
//     "https://images.dog.ceo/breeds/shiba/shiba-12.jpg",
//     "https://images.dog.ceo/breeds/shiba/shiba-14.jpg",
//     "https://images.dog.ceo/breeds/shiba/shiba-17.jpg",
//     "https://images.dog.ceo/breeds/shiba/shiba-2.jpg",
//     "https://images.dog.ceo/breeds/shiba/shiba-3i.jpg",
//     "https://images.dog.ceo/breeds/shiba/shiba-4.jpg",
//     "https://images.dog.ceo/breeds/shiba/shiba-5.jpg",
//     "https://images.dog.ceo/breeds/shiba/shiba-6.jpg",
//     "https://images.dog.ceo/breeds/shiba/shiba-7.jpg",
//     "https://images.dog.ceo/breeds/shiba/shiba-8.jpg",
//     "https://images.dog.ceo/breeds/shiba/shiba-9.jpg",
// ];


function Main() {
    const [urls, setUrls] = useState(null);
    useEffect(() => {
        fetchImages("affenpinscher").then((urls) => {
            setUrls(urls);
        });
    }, []);

    function reloadImages(breed) {
        fetchImages(breed).then((urls) => {
            setUrls(urls);
        });
    }

    return (
        <main>
            <section className="section">
                <div className="container">
                    <Form onFormSubmit={reloadImages} />
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <Gallery urls={urls} />
                </div>
            </section>
        </main>
    );
}

export default Main;
