import React from 'react'
import Card from './Card'


export default function Cards({ itens, styles}) {
  return (
    <ul className={styles.galeria__cards}>
            {
                itens.map((foto) => {
                    return (
                        <Card key={foto.id} item={foto} style={styles} />
                    )
                })
            }
        </ul>
  )
}
