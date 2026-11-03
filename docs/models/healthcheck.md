# HealthCheck

Default job configuration applied to new projects created in this team.

## Example Usage

```typescript
import { HealthCheck } from "@vercel/sdk/models/team.js";

let value: HealthCheck = {
  targets: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `targets`                                                               | *string*[]                                                              | :heavy_check_mark:                                                      | Default job configuration applied to new projects created in this team. |