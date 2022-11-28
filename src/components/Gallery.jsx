import Image from "./Image";

function Gallery() {
    const url = "https://images.dog.ceo/breeds/shiba/shiba-8.jpg";
    return (
        <div className="columns is-vcentered is-multiline">
            <div className="column is-3">
                <Image src={url} />
            </div>
        </div>
    );
}

export default Gallery;