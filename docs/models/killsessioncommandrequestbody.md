# KillSessionCommandRequestBody

## Example Usage

```typescript
import { KillSessionCommandRequestBody } from "@vercel/sdk/models/killsessioncommandop.js";

let value: KillSessionCommandRequestBody = {
  signal: 15,
};
```

## Fields

| Field                                                                                                                                     | Type                                                                                                                                      | Required                                                                                                                                  | Description                                                                                                                               | Example                                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `signal`                                                                                                                                  | *number*                                                                                                                                  | :heavy_check_mark:                                                                                                                        | The POSIX signal number to send to the process. Common values: 15 (SIGTERM) for graceful termination, 9 (SIGKILL) for forced termination. | 15                                                                                                                                        |