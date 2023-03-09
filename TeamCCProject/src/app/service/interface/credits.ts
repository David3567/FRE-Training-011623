export interface Credits {
    id: number;
    cast: Actor[];
  }

interface Actor {
    id: number;
    name: string;
    character: string;
    // ...
  }