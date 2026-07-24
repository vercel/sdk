# GetProjectTraceEvents

## Example Usage

```typescript
import { GetProjectTraceEvents } from "@vercel/sdk/models/getprojecttraceop.js";

let value: GetProjectTraceEvents = {
  name: "<value>",
  timestamp: [
    6881.28,
    1509.67,
  ],
  attributes: {
    "key": "<value>",
    "key1": "<value>",
  },
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `name`                | *string*              | :heavy_check_mark:    | N/A                   |
| `timestamp`           | *number*[]            | :heavy_check_mark:    | N/A                   |
| `attributes`          | Record<string, *any*> | :heavy_check_mark:    | N/A                   |