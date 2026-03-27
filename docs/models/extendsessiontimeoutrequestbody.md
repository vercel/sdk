# ExtendSessionTimeoutRequestBody

## Example Usage

```typescript
import { ExtendSessionTimeoutRequestBody } from "@vercel/sdk/models/extendsessiontimeoutop.js";

let value: ExtendSessionTimeoutRequestBody = {
  duration: 300000,
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           | Example                                                                                               |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `duration`                                                                                            | *number*                                                                                              | :heavy_check_mark:                                                                                    | The amount of time in milliseconds to add to the current timeout. Must be at least 1000ms (1 second). | 300000                                                                                                |