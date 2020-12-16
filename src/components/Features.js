import React from 'react'
import PropTypes from 'prop-types'
import Flashcard from '../components/Flashcard'

const styles = {
  card: {
    border: '1px solid #eeeeee',
    backgroundColor: '#758085',
    borderRadius: '8px',
    padding: '15px',
    width: '550px',
    height: '350px'
  }
};


const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map((item) => (
      <div key={item.question} className="column is-6">
        <section className="section">
          <div className="has-text-centered">
            <div
              style={{
                width: '240px',
                display: 'inline-block',
              }}
            >
            </div>
          </div>
          <Flashcard styles={styles} question={item.question} answer={item.answer}/>
        </section>
      </div>
    ))}
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string,
      answer: PropTypes.string
    })
  ),
}

export default FeatureGrid
