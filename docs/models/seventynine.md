# SeventyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { SeventyNine } from "@vercel/sdk/models/userevent.js";

let value: SeventyNine = {
  logDrainUrl: "https://glass-celsius.info/",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `logDrainUrl`      | *string*           | :heavy_check_mark: | N/A                |
| `integrationName`  | *string*           | :heavy_minus_sign: | N/A                |