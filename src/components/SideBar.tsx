import { Button } from './Button';

import '../styles/sidebar.scss';
import { Dispatch, SetStateAction } from 'react';
import { Genre } from '../interfaces';

interface SidebarProps {
  genres: Array<Genre>,
  setSelectedGenreId: Dispatch<SetStateAction<number>>;
  selectedGenreId: number
}

export function SideBar(props: SidebarProps) {
  function handleClickButton(id: number) {
    props.setSelectedGenreId(id);
  }

  return(
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {props.genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={props.selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  );
}