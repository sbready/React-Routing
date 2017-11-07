import React from 'react';

// functional component
// If we're not using state and/or lifecycle hooks (component will mount, etc... ) we can use a functional component
// just a function that returns JSX

export default function Missing() {
  return (
    <div>
      <h1>Uh Oh, the requested resource is not here.</h1>
    </div>
  )
}
