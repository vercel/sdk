# Eleven

The payload of the event, if requested.

## Example Usage

```typescript
import { Eleven } from "@vercel/sdk/models/userevent.js";

let value: Eleven = {
  apiKey: {
    id: "<id>",
    name: "<value>",
  },
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `apiKey`                             | [models.ApiKey](../models/apikey.md) | :heavy_check_mark:                   | N/A                                  |