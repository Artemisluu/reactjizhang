import React, { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Icon = (props: { pathname: string; name: string; defaultIcon: string; selectedIcon: string }) => {
  const location = useLocation();

  const selected = useMemo(() => {
    return location.pathname.startsWith(props.pathname);
  }, [props.pathname, location.pathname]);

  return (
    <Link to={props.pathname} className={['nav-item', selected ? 'selected' : ''].join(' ')}>
      <svg>
        <use
          xlinkHref={selected ? `#${props.selectedIcon}` : `#${props.defaultIcon}`}
        />
      </svg>
      {props.name}
    </Link>
  );
};
export default Icon;
