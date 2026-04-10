# Typecheck

Default job configuration applied to new projects created in this team.

## Example Usage

```typescript
import { Typecheck } from "@vercel/sdk/models/team.js";

let value: Typecheck = {
  targets: [],
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `targets`                                                               | *string*[]                                                              | :heavy_check_mark:                                                      | Default job configuration applied to new projects created in this team. |