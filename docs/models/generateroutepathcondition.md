# GenerateRoutePathCondition

## Example Usage

```typescript
import { GenerateRoutePathCondition } from "@vercel/sdk/models/generaterouteop.js";

let value: GenerateRoutePathCondition = {
  value: "<value>",
  syntax: "path-to-regexp",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `value`                              | *string*                             | :heavy_check_mark:                   | N/A                                  |
| `syntax`                             | [models.Syntax](../models/syntax.md) | :heavy_check_mark:                   | N/A                                  |