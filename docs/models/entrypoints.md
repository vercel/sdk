# Entrypoints

## Example Usage

```typescript
import { Entrypoints } from "@vercel/sdk/models/canceldeploymentresponsebody.js";

let value: Entrypoints = {
  entrypoint: "<value>",
  scheduleNames: [],
  sourceFile: "<value>",
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `entrypoint`                                                              | *string*                                                                  | :heavy_check_mark:                                                        | Runtime-specific entrypoint locator from `vercel.json`.                   |
| `scheduleNames`                                                           | *string*[]                                                                | :heavy_check_mark:                                                        | Names of the schedules that dispatch to this entrypoint, in config order. |
| `sourceFile`                                                              | *string*                                                                  | :heavy_check_mark:                                                        | Project-relative source file that contains the entrypoint.                |