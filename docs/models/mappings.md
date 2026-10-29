# Mappings

## Example Usage

```typescript
import { Mappings } from "@vercel/sdk/models/createaigatewaybyokcredentialop.js";

let value: Mappings = {
  gatewayModelSlug: "<value>",
  customModelId: "<id>",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `gatewayModelSlug`                                          | *string*                                                    | :heavy_check_mark:                                          | The AI Gateway model slug (e.g., "openai/gpt-5.4")          |
| `customModelId`                                             | *string*                                                    | :heavy_check_mark:                                          | The customer's custom model ID (e.g., "my-finetuned-gpt-5") |