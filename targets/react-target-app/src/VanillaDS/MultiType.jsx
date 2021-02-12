import React from 'react';
const DefaultMultiType = () => (
  <vanilla-ds-multitype
    title="Multitype component (default button)"
    itemlist={['red', 'blue', 'green', 'yellow']}
    buttonprops={JSON.stringify({ collapsedText: "expandir", expandedText: "recolher" })}
  >
  </vanilla-ds-multitype>
);

const MultiType = () => (
  <vanilla-ds-multitype
    title="Multitype component"
    itemlist={['pizza', 'potato', 'banana']}
  >
    <vanilla-ds-button slot="button"></vanilla-ds-button>
  </vanilla-ds-multitype>
);

export { DefaultMultiType, MultiType };
