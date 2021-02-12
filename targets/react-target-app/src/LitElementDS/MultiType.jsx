import React from 'react';
const DefaultMultiType = () => (
  <litelement-ds-multitype
    title="Multitype component (default button)"
    itemlist={JSON.stringify(['red', 'blue', 'green', 'yellow'])}
    buttonprops={JSON.stringify({ collapsedText: "expandir", expandedText: "recolher" })}
  >
  </litelement-ds-multitype>
);

const MultiType = () => (
  <litelement-ds-multitype
    title="Multitype component"
    itemlist={JSON.stringify(['pizza', 'potato', 'banana'])}
  >
    <litelement-ds-button slot="button"></litelement-ds-button>
  </litelement-ds-multitype>
);

export { DefaultMultiType, MultiType };
