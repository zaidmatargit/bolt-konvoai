INSERT INTO projects (name, description, status, progress, deadline) VALUES
      ('Website Redesign', 'Complete redesign of company website', 'active', 25, '2024-02-15'),
      ('Mobile App Development', 'New mobile app for iOS and Android', 'active', 60, '2024-03-01');

    INSERT INTO team_members (name, role, capacity, active_projects) VALUES
      ('John Doe', 'Developer', 80, 2),
      ('Jane Smith', 'Designer', 90, 1);

    INSERT INTO users (email, role, status) VALUES
      ('freelancer@example.com', 'freelancer', 'active'),
      ('agency@example.com', 'agency', 'active'),
      ('client@example.com', 'client', 'active'),
      ('admin@example.com', 'admin', 'active');
