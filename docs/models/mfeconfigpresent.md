# MfeConfigPresent

Default job configuration applied to new projects created in this team.

## Example Usage

```typescript
import { MfeConfigPresent } from "@vercel/sdk/models/team.js";

let value: MfeConfigPresent = {
  targets: [],
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `targets`                                                               | *string*[]                                                              | :heavy_check_mark:                                                      | Default job configuration applied to new projects created in this team. |