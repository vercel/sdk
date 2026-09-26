# AiGatewayEvaluationFallbackCondition


## Supported Types

### `models.AiGatewayEvaluationFallbackCondition1`

```typescript
const value: models.AiGatewayEvaluationFallbackCondition1 = {
  confidenceBelow: 9907.48,
  question: "<value>",
};
```

### `models.AiGatewayEvaluationFallbackCondition2`

```typescript
const value: models.AiGatewayEvaluationFallbackCondition2 = {
  probabilityBetween: [
    1716.87,
    7085.19,
  ],
  question: "<value>",
};
```

### `models.AiGatewayEvaluationFallbackCondition3`

```typescript
const value: models.AiGatewayEvaluationFallbackCondition3 = {
  any: [
    {
      atLeast: {
        conditions: [
          {
            all: [
              {
                confidenceBelow: 1793.37,
                question: "<value>",
              },
            ],
          },
        ],
        count: 2609.01,
      },
    },
  ],
};
```

### `models.AiGatewayEvaluationFallbackCondition4`

```typescript
const value: models.AiGatewayEvaluationFallbackCondition4 = {
  all: [],
};
```

### `models.AiGatewayEvaluationFallbackCondition5`

```typescript
const value: models.AiGatewayEvaluationFallbackCondition5 = {
  atLeast: {
    conditions: [
      {
        all: [
          {
            confidenceBelow: 1793.37,
            question: "<value>",
          },
        ],
      },
    ],
    count: 2609.01,
  },
};
```

