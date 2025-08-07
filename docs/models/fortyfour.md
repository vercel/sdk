# FortyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { FortyFour } from "@vercel/sdk/models/userevent.js";

let value: FortyFour = {
  name: "<value>",
  cdnEnabled: false,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `name`             | *string*           | :heavy_check_mark: | N/A                |
| `cdnEnabled`       | *boolean*          | :heavy_check_mark: | N/A                |