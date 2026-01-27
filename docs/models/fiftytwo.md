# FiftyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { FiftyTwo } from "@vercel/sdk/models/userevent.js";

let value: FiftyTwo = {
  name: "<value>",
  cdnEnabled: true,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `name`             | *string*           | :heavy_check_mark: | N/A                |
| `cdnEnabled`       | *boolean*          | :heavy_check_mark: | N/A                |