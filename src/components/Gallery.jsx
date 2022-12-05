import Image from "./Image";
import Loading from "./Loading";

function Gallery(props) {

    const { urls } = props;
    if (urls == null) {
        return <Loading />;
    }
    return (
        <div className="columns is-vcentered is-multiline">
            {urls.map((url) => {
                return (
                    <div key={url} className="column is-3">
                        <Image src={url} />
                    </div>
                );
            })}
        </div>
    );
}

export default Gallery;