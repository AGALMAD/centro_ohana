-- Insertar dos usuarios en la tabla users
INSERT INTO users (id, username, password, role)
VALUES
    (RANDOM_UUID(), 'admin', '$2a$10$7aPaW1n1f5EzG.9JG1FvAeNksKsyo1mCBHZmpxqBiLkYo4yPd2.jO', 'ADMIN'),
    (RANDOM_UUID(), 'user1', '$2a$10$X9hXfx9fHwWQPr5iKz6YKuvgRV.KP6E0kPfnf4H1Vfu0/HyjyZJvi', 'USER');
