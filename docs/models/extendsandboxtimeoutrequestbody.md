# ExtendSandboxTimeoutRequestBody

## Example Usage

```typescript
import { ExtendSandboxTimeoutRequestBody } from "@vercel/sdk/models/extendsandboxtimeoutop.js";

let value: ExtendSandboxTimeoutRequestBody = {
  duration: 300000,
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           | Example                                                                                               |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `duration`                                                                                            | *number*                                                                                              | :heavy_check_mark:                                                                                    | The amount of time in milliseconds to add to the current timeout. Must be at least 1000ms (1 second). | 300000                                                                                                |