
function Tile({isSmall, component}){

  const Component = <>{component}</>;

  return(
    <div className={isSmall == "true" ? "tile tile_small" : "tile tile_medium"} >
    {Component}
    </div>
  )
}

export default Tile;

