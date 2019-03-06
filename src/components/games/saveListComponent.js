import React, { Component } from 'react';
import { CollectionItem} from 'react-materialize'

export default function SaveList(props){

    return props.saves.map((save, index) => {
        return (
        <div key={save.id}>
          <CollectionItem s={8}>Pad: {save.pad} period: {save.period}
          <a href="#" className="secondary-content" onClick={event => {
            event.preventDefault()
            console.log(props)
            props.deleteSave(save.id, props.game.home_bool)
          }}>
          <i className="material-icons">delete</i></a></CollectionItem>
          <hr/>
        </div>
      )
      }
    )
}
