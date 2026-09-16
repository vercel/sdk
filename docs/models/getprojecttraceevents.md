# GetProjectTraceEvents

## Example Usage

```typescript
import { GetProjectTraceEvents } from "@vercel/sdk/models/getprojecttraceop.js";

let value: GetProjectTraceEvents = {
  attributes: {
    "key": "<value>",
    "key1": "<value>",
  },
  name: "<value>",
  timestamp: [
    1509.67,
    6594.39,
  ],
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `attributes`          | Record<string, *any*> | :heavy_check_mark:    | N/A                   |
| `name`                | *string*              | :heavy_check_mark:    | N/A                   |
| `timestamp`           | *number*[]            | :heavy_check_mark:    | N/A                   |