import React from 'react'
import { Review } from '../Review/Review'

/**
 * **Examples**
 *
 * ```
 * <Reviews reviews={[
 *      {
 *          username: {
 *              name: 'Steve Calderón',
 *              imgProfile: 'https://images.unsplash.com/photo-1569931727762-93dd90109ecd'
 *          },
 *          date: new Date(2021, 2, 25),
 *          stars: 4,
 *          disabled: true,
 *          review: 'Buen producto'
 *      },
 *      {
 *          username: {
 *              name: 'Lola Lopez',
 *              imgProfile: 'https://images.unsplash.com/photo-1558898479-33c0057a5d12'
 *          },
 *          date: new Date(2020, 2, 27),
 *          stars: 3,
 *          disabled: true,
 *          review: 'Me gustó el producto we'
 *      },
 *      {
 *          username: {
 *              name: 'Lalo Lopez',
 *              imgProfile: 'https://images.unsplash.com/photo-1569931727762-93dd90109ecd'
 *          },
 *          date: new Date(2021, 2, 25),
 *          stars: 1,
 *          disabled: true,
 *          review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, ab eligendi veritatis accusamus adipisci dolore assumenda esse? Aut, dicta atque accusantium libero laboriosam, amet quae qui quisquam eos cumque doloremque!'
 *      }
 *  ]} />
 *  ```
 * @param {*} param0
 * @returns
 */
export const Reviews = ({ reviews = [] }) => {
  return (
    <div>
      {reviews.map((review, i) => {
        return (<Review className="mb-5 mx-5" review={review} key={i} />)
      })}
    </div>
  )
}
