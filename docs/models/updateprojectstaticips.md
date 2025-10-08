# UpdateProjectStaticIps

Manage Static IPs for this project

## Example Usage

```typescript
import { UpdateProjectStaticIps } from "@vercel/sdk/models/updateprojectop.js";

let value: UpdateProjectStaticIps = {
  enabled: true,
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `enabled`                             | *boolean*                             | :heavy_check_mark:                    | Opt-in to Static IPs for this project |