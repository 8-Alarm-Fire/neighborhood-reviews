/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable max-len */
/* eslint-disable class-methods-use-this */
import React from 'react';
// import PropTypes from 'prop-types';
import styles from '../styles/GridModal.css';
import ModalItem from './ModalItems';

class GridModal extends React.Component {
  handleModalFadeOut() {
    document.getElementById('#fade').fadeOut('slow');
  }

  randomColor() {
    const colorArr = ['rgb(30, 173, 187)', 'rgb(250,140,104)', 'rgb(206,182,255)', 'rgb(116,6,49)', 'rgb(242,196,48)', 'rgb(5,34,134)', 'rgb(254,94,63)', 'rgb(7,173,187)'];
    const randomIndex = Math.floor(Math.random() * (7 - 0 + 1) + 0);
    const selectedColor = colorArr[randomIndex];
    return selectedColor;
  }

  render() {
    return (
      <div className={styles.modalBackground}>
        <div id="fade" className={styles.modalContainer}>
          <div className={styles.navModal}>
            <button className={styles.modalButtons} type="button" onClick={() => this.handleModalFadeOut} onClick={() => this.props.toggleGridModal()}>X</button>
          </div>
          <div className={styles.gridContainer}>
            {this.props.reviews.length > 1 ? this.props.reviews.map((review, index) => <ModalItem review={review} key={index} color={this.randomColor()} />) : null}
          </div>
        </div>
      </div>
    );
  }
}

// Modal.propTypes = {
//   reviews: PropTypes.object,
//   toggleModal: PropTypes.function,
// };

export default GridModal;
