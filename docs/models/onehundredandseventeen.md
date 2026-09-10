# OneHundredAndSeventeen

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSeventeen } from "@vercel/sdk/models/deployhook.js";

let value: OneHundredAndSeventeen = {
  name: "<value>",
  cdnEnabled: false,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `name`             | *string*           | :heavy_check_mark: | N/A                |
| `cdnEnabled`       | *boolean*          | :heavy_check_mark: | N/A                |