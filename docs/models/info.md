# Info

## Example Usage

```typescript
import { Info } from "@vercel/sdk/models/getdeploymenteventsop.js";

let value: Info = {
  type: "build",
  name: "bld_by3kz18kn",
  entrypoint: ".",
};
```

## Fields

| Field                    | Type                     | Required                 | Description              | Example                  |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `type`                   | *string*                 | :heavy_minus_sign:       | Type of operation        | build                    |
| `name`                   | *string*                 | :heavy_minus_sign:       | Name of the build        | bld_by3kz18kn            |
| `entrypoint`             | *string*                 | :heavy_minus_sign:       | Entrypoint for the build | .                        |