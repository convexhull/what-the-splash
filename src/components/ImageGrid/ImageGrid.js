import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles.css';
import { loadImages } from '../../actions';

const key = '5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02';

class ImageGrid extends Component {
    componentDidMount() {
        this.props.loadImages();
    }

    render() {
        const { images } = this.props;
        return (
            <div className="content">
                <section className="grid">
                    {images.map(image => (
                        <div
                            key={image.id}
                            className={`item item-${Math.ceil(
                                image.height / image.width,
                            )}`}
                        >
                            <img
                                src={image.urls.small}
                                alt={image.user.username}
                            />
                        </div>
                    ))}
                    <a onClick={this.props.loadImages}>Load Images</a>
                </section>
            </div>
        );
    }
}

const mapStateToProps = ({ isLoading, images, error }) => {
    return {
        isLoading,
        images,
        error,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadImages: () => dispatch(loadImages()),
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ImageGrid);
